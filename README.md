# React Smart Notification Toaster

A highly customizable React component for displaying customizable notifications with progress bars.

![SmartNotification Example](https://i.ibb.co.com/PGGkGhtm/Screenshot-2025-02-17-134209.png)

## ✨ Features

- ✅ Customizable notification message, description, button, every style of the notification window
- ✅ Supports **progress bar with auto-close**
- ✅ Allows **manual close option**
- ✅ Fully **stylable** with CSS
- ✅ Works seamlessly with **React 17+**
- ✅ Minimal dependencies

## 📦 Installation

Install via **NPM**:

```sh
npm install react-smart-notification-toaster
```

or via **Yarn**:

```sh
yarn add react-smart-notification-toaster
```

## 🚀 Usage

Import `SmartNotification` into your React component:

```jsx
import React, { useState } from "react";
import SmartNotification from "smart-notification";

const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  const notificationSettings = {
    notify_text: "You have a new message!",
    notify_desc: [{ desc: true, text: "Check your inbox now." }],
    notify_btn: { btn: true, text: "Open" },
    redirect_url: { redirect: false, url: "#", text: "Ignore" },
    notify_icon: { icon: true, color: "#6a3ceb", type: "info" },
    notify_close: { close_n: true, color: "#ff0000" },
    notify_color: {
      background: "#f0f0f0",
      text: "#333",
      border: { type: true, color: "5px solid #430fe1" },
    },
    progress_bar: { type: true, background: "#ff0000" },
    notify_duration: 5000,
  };

  return (
    <div>
      <button onClick={() => setShowNotification(true)}>
        Show Notification
      </button>
      {showNotification && <SmartNotification {...notificationSettings} />}
    </div>
  );
};

export default App;
```

## 🛠 Props

| Prop              | Type     | Default                                              | Description              |
| ----------------- | -------- | ---------------------------------------------------- | ------------------------ |
| `notify_text`     | `string` | `"Default Notification"`                             | Notification title       |
| `notify_desc`     | `array`  | `[]`                                                 | Description text         |
| `notify_btn`      | `object` | `{ btn: false, text: "OK" }`                         | Action button            |
| `redirect_url`    | `object` | `{ redirect: false, url: "#", text: "Maybe later" }` | Redirect link            |
| `notify_icon`     | `object` | `{ icon: false, color: "#E2E1E7" }`                  | Icon with color          |
| `notify_close`    | `object` | `{ close_n: false, color: "#84869f" }`               | Close button             |
| `notify_color`    | `object` | `{ background: "#f7f7f9", text: "#3a393e" }`         | Background & text colors |
| `progress_bar`    | `object` | `{ type: false, background: "#ff0000" }`             | Progress bar settings    |
| `notify_duration` | `number` | `3000`                                               | Auto-close duration (ms) |

## 🎨 Styling

You can customize styles by overriding `SmartNotification.css`:

```css
.smart-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.notification {
  padding: 15px;
}
.progress-bar {
  height: 5px;
  transition: width 0.3s ease-in-out;
}
```

## 🔧 Development

Clone the repository and install dependencies:

```sh
git clone https://github.com/chonchol/react-notification-bar.git
cd react-notification-bar
npm install
```

Build the package:

```sh
npm run build
```

Run the example:

```sh
npm start
```

## 📜 License

This project is licensed under the **MIT License**.

## Author

Developed by **[Chonchol Mahmud](mailto:chonchol57@gmail.com)**. Feel free to contribute or report issues!

## 💬 Need Help?

If you encounter any issues, please create an **[Issue](https://github.com/chonchol/react-notification-bar/issues)** on GitHub.

🚀 **Happy Coding!** 🚀
