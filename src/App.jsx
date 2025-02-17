import React, { useState } from "react";
import SmartNotification from "./SmartNotification";

const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  const notificationSettings = {
    notify_text: "Custom code is not validated.",
    notify_desc: [
      {
        desc: true,
        text: "Incorrect code may impact your website's performance",
      },
    ],
    notify_btn: { btn: true, text: "Ok, I got it!" },
    redirect_url: { redirect: false, url: "#", text: "Maybe later" },
    notify_icon: { icon: false, color: "#E2E1E7", type: null },
    notify_close: { close_n: false, color: "#84869f" },
    notify_color: {
      background: "#f7f7f9",
      text: "#3a393e",
      border: {
        type: true,
        color: "5px solid #c5c4cc",
      },
    },
    progress_bar: {
      type: false,
      background: "#ff0000",
    },
    notify_duration: 10000,
  };

  const handleClick = () => {
    setShowNotification(true);

    const duration = notificationSettings.notify_duration ?? 3000;

    setTimeout(() => {
      setShowNotification(false);
    }, duration);
  };

  return (
    <>
      <button onClick={handleClick}>Show Notification</button>
      {showNotification && <SmartNotification {...notificationSettings} />}
    </>
  );
};

export default App;
//
