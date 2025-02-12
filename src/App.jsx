import React from "react";
import SmartNotification from "./SmartNotification";

const App = () => {
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
    notify_icon: { icon: false, color: "#E2E1E7" },
    notify_close: { close_n: false, color: "#E2E1E7" },
    notify_color: {
      background: "#F7F7F9",
      text: "#DAD9DE",
      border: {
        type: true,
        color: "5px solid #E2E1E7",
      },
    },
    progress_bar: {
      type: false,
      background: "#ff0000",
    },
  };

  const notificationSettings2 = {
    notify_text: "The data export you requested is ready!",
    notify_desc: [
      {
        desc: false,
        text: "Incorrect code may impact your website's performance",
      },
    ],
    notify_btn: { btn: true, text: "View the data" },
    redirect_url: { redirect: false, url: "#", text: "View the data" },
    notify_icon: { icon: true, color: "#4D21E6" },
    notify_close: { close_n: true, color: "#DDDEE2" },
    notify_color: {
      background: "#F7F7F9",
      text: "#DAD9DE",
      border: {
        type: true,
        color: "5px solid #A78DF0",
      },
    },
    progress_bar: {
      type: false,
      background: "#ff0000",
    },
  };

  const notificationSettings3 = {
    notify_text: "You have no credits left! Upgrade to continue.",
    notify_desc: [
      {
        desc: false,
        text: "Incorrect code may impact your website's performance",
      },
    ],
    notify_btn: { btn: false, text: "View the data" },
    redirect_url: { redirect: true, url: "#", text: "Upgrade" },
    notify_icon: { icon: true, color: "#F9BF54" },
    notify_close: { close_n: false, color: "#DDDEE2" },
    notify_color: {
      background: "#FFF9EB",
      text: "#775500",
      border: {
        type: false,
        color: "5px solid #A78DF0",
      },
    },
    progress_bar: {
      type: true,
      background: "#F9BF54",
    },
  };

  return (
    <>
      <SmartNotification {...notificationSettings} />
      <SmartNotification {...notificationSettings2} />
      <SmartNotification {...notificationSettings3} />

      {/* <button onClick={handleClick}>Click to Open</button> */}
    </>
  );
};

export default App;
//
