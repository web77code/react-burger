import { refreshToken } from "../../utils/api-utils";

const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;
    let isConnected = false;
    let hasOldConnection = false;
    let reconnectTimer = 0;
    let url = "";

    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsInit,
        wsFetching,
        onOpen,
        wsClose,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsInit) {
        dispatch({ type: wsFetching });

        if (isConnected) {
          hasOldConnection = true;
          socket.close();
        }

        url = action.payload;
        socket = new WebSocket(url);
        isConnected = true;
      }

      if (socket) {
        socket.onopen = (event) => {
          hasOldConnection = false;
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          if (parsedData.message === "Invalid or missing token") {
            refreshToken()
              .then((res) => {
                const wssUrl = new URL(url);
                wssUrl.searchParams.set(
                  "token",
                  res.accessToken.replace("Bearer ", "")
                );
                dispatch({ type: wsInit, payload: wssUrl });
              })
              .catch((err) => {
                dispatch({ type: onError, payload: err });
              });
            dispatch({ type: wsClose });

            return;
          }
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });

          if (isConnected && !hasOldConnection) {
            reconnectTimer = setTimeout(() => {
              dispatch({ type: wsInit, payload: url });
            }, 5000);
          }
        };
      }

      if (type === wsClose && socket) {
        clearTimeout(reconnectTimer);
        isConnected = false;
        reconnectTimer = 0;
        socket.close();
      }

      next(action);
    };
  };
};

export default socketMiddleware;
