import React from "react";
import SmartNotification from "./SmartNotification";

const App = () => {
  const notificationSettings = {
    notify_text: "Custom code is not validated.",
    notify_desc: [
      { text: "Please check the code and try again." },
      { text: "If you think this is a mistake, please contact support." },
    ],
    notify_btn: true,
    button_text: "Ok, I got it",
    redirect_url: "#",
    notify_icon: true,
    notify_close: true,
    notify_color: {
      background: "#ff0000",
      text: "#ffffff",
      icon: "#ffffff",
      border: {
        type: true,
        color: "5px solid #f1c40f;",
      },
    },
    progress_bar: {
      type: true,
      background: "#ff0000",
    },
  };

  return (
    <div>
      <div>
        <SmartNotification {...notificationSettings} />
      </div>

      {/* <button onClick={handleClick}>Click to Open</button> */}
    </div>
  );
};

export default App;
//
