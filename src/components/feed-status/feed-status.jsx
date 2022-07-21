import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FeedStatus = ({ status }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    let statusText, statusColor;

    switch (status) {
      case "created": {
        statusText = "Создан";
        statusColor = "#F2F2F3";
        break;
      }
      case "pending": {
        statusText = "Готовится";
        statusColor = "#F2F2F3";
        break;
      }
      case "done": {
        statusText = "Выполнен";
        statusColor = "#00CCCC";
        break;
      }
      default:
        statusText = "";
    }

    setState({
      text: statusText,
      color: statusColor,
    });
  }, [status]);

  return (
    <>
      {state && (
        <p
          className="text text_type_main-default"
          style={{ color: state.color }}
        >
          {state.text}
        </p>
      )}
    </>
  );
};

FeedStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default FeedStatus;
