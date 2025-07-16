// client/src/components/Notification.jsx

import { Toaster } from "react-hot-toast";

const Notification = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1f2937", // dark gray
          color: "#fff",
          fontSize: "0.9rem",
        },
        success: {
          icon: '✅',
          style: {
            background: "#22c55e", // green
            color: "#fff",
          },
        },
        error: {
          icon: '❌',
          style: {
            background: "#ef4444", // red
            color: "#fff",
          },
        },
        loading: {
          icon: '⏳',
          style: {
            background: "#3b82f6", // blue
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default Notification;
