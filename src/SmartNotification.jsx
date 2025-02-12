import React, { useState, useEffect } from "react";
import "./SmartNotification.css";

const SmartNotification = ({
  notify_text,
  notify_desc,
  notify_btn,
  redirect_url,
  notify_icon,
  notify_close,
  notify_color,
  progress_bar,
}) => {
  const [openNotify, setOpenNotify] = useState(true);
  const [timer, setTimer] = useState(null);
  const [progress, setProgress] = useState(0);

  console.log(progress);
  console.log("notify_color:", notify_icon);
  console.log("notify_color.icon:", notify_icon?.icon);

  useEffect(() => {
    if (openNotify && progress_bar.type == true) {
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
      <div
        className="notification"
        style={{
          position: "relative",
          backgroundColor: `${notify_color.background}`,
          borderLeft: `${
            notify_color.border.type && notify_color.border.color
          }`,
        }}
      >
        <div className="notification-wrap">
          <div className="icon-wrap">
            {notify_icon.icon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
              >
                <path
                  fill={notify_icon.color}
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                />
              </svg>
            )}
            <h4 style={{ color: `${notify_color.text}` }}>{notify_text}</h4>
          </div>

          {notify_desc.some((item) => item.desc) && (
            <ul>
              {notify_desc.map((item, index) =>
                item.desc ? <li key={index}>{item.text}</li> : null
              )}
            </ul>
          )}

          {notify_btn.btn && (
            <div className="export-option">
              <button>{notify_btn.text}</button>
            </div>
          )}
        </div>
        {redirect_url.redirect && (
          <a href={redirect_url.url} style={{ color: `${notify_color.text}` }}>
            {redirect_url.text}
          </a>
        )}
        {notify_close.close_n && (
          <div
            style={{ marginLeft: "auto" }}
            onClick={() => setOpenNotify(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="10.5"
              viewBox="0 0 384 512"
              cursor="pointer"
            >
              <path
                fill={notify_close.color}
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </div>
        )}
        {progress_bar.type && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              height: "5px",
              backgroundColor: `${progress_bar.background}`,
              width: `${progress}%`,
              transition: "width 0.1s linear",
            }}
          ></div>
        )}
      </div>
    </div>
    // )
  );
};

export default SmartNotification;
