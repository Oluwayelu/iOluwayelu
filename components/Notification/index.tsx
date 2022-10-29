import { FaTimes, FaTimesCircle, FaCheckSquare } from "react-icons/fa";
import { useNotification } from "context/Notification";

import { FunctionComponent, useEffect } from "react";

const Notification: FunctionComponent = () => {
  const { show, setShow, type, message } = useNotification();

  useEffect(() => {
    if (type !== null) {
      setShow(true);
    }

    return () => {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    };
  }, [setShow, type]);

  if (show) {
    return (
      <div
        className={`${
          type === "error" ? "bg-error" : "bg-success"
        } fixed max-w-[300px] w-full flex flex-col items-start top-20 right-5 lg:right-20 p-5 rounded cursor-pointer`}
      >
        <FaTimes className="absolute right-3 top-3" />
        <div className="w-full flex items-center uppercase gap-2">
          {type === "error" ? (
            <FaTimesCircle className="w-5 h-5" />
          ) : (
            <FaCheckSquare className="w-5 h-5" />
          )}
          {type}
        </div>
        {message}
      </div>
    );
  } else {
    return null;
  }
};

export default Notification;
