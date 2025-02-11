import React from "react";
import "./SmartNotification.css";

const SmartNotification = () => {
  return (
    <div className="smart-notification">
      <div className="notification info">
        <div className="notification-wrap">
          <h4>Custom code is not validated.</h4>
          <p>Incorrect code may impact performance.</p>
          <button>Ok, I got it</button>
        </div>
      </div>

      <div className="notification info">
        <div className="notification-wrap">
          <div className="export-heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="14"
              viewBox="0 0 512 512"
            >
              <path
                fill="#5428d7"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              />
            </svg>
            <h4>The data export you requested is ready!</h4>
          </div>

          <div className="export-option">
            <button>View the data</button>
            <a href="#">Maybe later</a>
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
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
      </div>

      <div className="notification warning">
        <p>You have no credits left! Upgrade to continue.</p>
        <a href="#">Upgrade</a>
      </div>

      <div className="notification warning">
        <p>Warning: Your password strength is too low.</p>
        <button className="close-btn">&times;</button>
      </div>

      <div className="notification success">
        <p>Successfully uploaded!</p>
        <button className="close-btn">&times;</button>
      </div>

      <div className="notification info">
        <p>
          A new software update is available. See what’s new in version 2.0.
        </p>
        <button>View the changelog</button>
        <button className="close-btn">&times;</button>
      </div>

      <div className="notification info">
        <p>Did you know? Here’s something you’d like to know.</p>
        <button className="close-btn">&times;</button>
      </div>

      <div className="notification error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          width="14"
          viewBox="0 0 512 512"
        >
          <path
            fill="#e74c3c"
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
          />
        </svg>
        <p>There was a problem with your submission.</p>
        <ul>
          <li>Must include at least 1 number</li>
          <li>Must include at least 2 uppercase letters</li>
        </ul>
      </div>

      <div className="notification error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          width="14"
          viewBox="0 0 512 512"
        >
          <path
            fill="#d74c3c"
            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
        </svg>
        <p>Whoops! Something went wrong.</p>
        <a href="#">Send crash report</a>
      </div>
    </div>
  );
};

export default SmartNotification;
