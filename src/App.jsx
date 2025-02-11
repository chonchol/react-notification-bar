import React, { useState } from "react";
import SmartNotification from "./SmartNotification";

const App = () => {
  const [openNotify, setOpenNotify] = useState(false);

  const handleClick = () => {
    setOpenNotify(true);
  };

  return (
    <div>
      {!openNotify || <SmartNotification text={"Hello Notification"} />}

      <button onClick={handleClick}>Click to Open</button>
    </div>
  );
};

export default App;
