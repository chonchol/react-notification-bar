import React, { useState, useEffect } from "react";
import "./SmartNotification.css";

const SmartNotification = ({
  notify_text,
  notify_desc,
  notify_btn,
  button_text,
  redirect_url,
  notify_icon,
  notify_close,
  notify_color,
}) => {
  const [openNotify, setOpenNotify] = useState(true);
  const [timer, setTimer] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (openNotify) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setOpenNotify(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      setTimer(interval);
    }

    return () => {
      clearInterval(timer);
    };
  }, [openNotify]);

  return (
    // openNotify && (
    <div className="smart-notification">
      <div className="notification info" style={{ position: "relative" }}>
        <div className="notification-wrap">
          <div className="icon-wrap">
            {notify_icon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
              >
                <path
                  fill={notify_color.icon}
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                />
              </svg>
            )}
            <h4>{notify_text}</h4>
          </div>
          {/* <p>{notify_desc}</p> */}
          <ul>
            {notify_desc.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          {notify_btn && (
            <div className="export-option">
              <button>View the data</button>
              <a href="#">Maybe later</a>
            </div>
          )}
        </div>
        {redirect_url && <a href={redirect_url}>Upgrade</a>}
        {notify_close && (
          <div
            style={{ marginLeft: "auto" }}
            onClick={() => setOpenNotify(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="10.5"
              viewBox="0 0 384 512"
            >
              <path
                fill="#cac9c9"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: "5px",
            backgroundColor: "#76c7c0",
            width: `${progress}%`,
            transition: "width 0.1s linear",
          }}
        ></div>
      </div>
    </div>
    // )
  );
};

export default SmartNotification;
