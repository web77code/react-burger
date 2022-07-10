import { CONFIG } from "./constants";
import { getCookie, setCookie } from "./cookies";

export const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(res);

export async function fetchWithRefresh(url, opts) {
  if (!getCookie("token") && localStorage.getItem("refreshToken") === null) {
    return Promise.reject("401 Unauthorized");
  }

  try {
    if (!getCookie("token")) {
      throw new Error("accessToken is empty");
    }

    const res = await fetch(url, opts);
    const data = await checkResponse(res);
    return data;
  } catch (err) {
    let errorResponse;

    if (!err.json) {
      errorResponse = {
        message: err.message,
      };
    } else {
      errorResponse = await err.json();
    }

    if (
      errorResponse.message === "jwt expired" ||
      errorResponse.message === "accessToken is empty"
    ) {
      const renewTokens = await getNewToken();

      if (!renewTokens.success) {
        return Promise.reject(renewTokens);
      } else {
        localStorage.setItem("refreshToken", renewTokens.refreshToken);
        setCookie("token", renewTokens.accessToken.split("Bearer ")[1]);

        const res = await fetch(url, {
          ...opts,
          headers: {
            ...opts.headers,
            Authorization: renewTokens.accessToken,
          },
        });
        const data = await checkResponse(res);
        return data;
      }
    } else {
      return Promise.reject(err);
    }
  }
}

async function getNewToken() {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });

  return checkResponse(res);
}
