import React, { useState, useEffect } from "react";
import "./SmartNotification.css";

const SmartNotification = ({
  notify_text = "Default Notification",
  notify_desc = [],
  notify_btn = { btn: false, text: "OK" },
  redirect_url = { redirect: false, url: "#", text: "Maybe later" },
  notify_icon = { icon: false, color: "#E2E1E7" },
  notify_close = { close_n: false, color: "#84869f", type: null },
  notify_color = {
    background: "#f7f7f9",
    text: "#3a393e",
    border: { type: false, color: "5px solid #c5c4cc" },
  },
  progress_bar = { type: false, background: "#ff0000" },
  notify_duration,
}) => {
  const defaultDuration = 3000;
  const duration = notify_duration ?? defaultDuration;

  const [openNotify, setOpenNotify] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!openNotify || !progress_bar.type || duration <= 0) return;

    const updateInterval = 50;
    const totalSteps = duration / updateInterval;
    const increment = 100 / totalSteps;

    let elapsedTime = 0;
    const interval = setInterval(() => {
      elapsedTime += updateInterval;
      setProgress((prev) => {
        if (elapsedTime >= duration) {
          clearInterval(interval);
          setOpenNotify(false);
          return 100;
        }
        return prev + increment;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [openNotify, duration, progress_bar.type]);

  const renderIcon = (type, color) => {
    switch (type) {
      case "info":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="14"
            viewBox="0 0 512 512"
          >
            <path
              fill={color}
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
            />
          </svg>
        );
      case "success":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="12.25"
            viewBox="0 0 448 512"
          >
            <path
              fill={color}
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="14"
            viewBox="0 0 512 512"
          >
            <path
              fill={color}
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="14"
            viewBox="0 0 512 512"
          >
            <path
              fill={color}
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleClose = () => {
    setOpenNotify(false);
    setProgress(100); // Ensure progress reaches 100% visually
  };

  return (
    openNotify && (
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
              {notify_icon.icon &&
                renderIcon(notify_icon.type, notify_icon.color)}
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
            <a
              href={redirect_url.url}
              style={{ color: `${notify_color.text}` }}
            >
              {redirect_url.text}
            </a>
          )}
          {notify_close.close_n && (
            <div style={{ marginLeft: "auto" }} onClick={handleClose}>
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
    )
  );
};

export default SmartNotification;
