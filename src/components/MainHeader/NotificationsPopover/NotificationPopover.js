import React from "react";

const notifications = [
  {
    id: 1,
    title: "System Update",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    timestamp: "March 26, 2024 at 6:45 P.M.",
  },
  {
    id: 2,
    title: "New Message",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    timestamp: "March 27, 2024 at 9:30 A.M.",
  },
  {
    id: 3,
    title: "Reminder",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: "March 28, 2024 at 2:15 P.M.",
  },
];

const NotificationComponent = () => {
  return (
    <div className="bg-zinc-200 p-4 rounded-lg max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button className="text-blue-500">Mark all as Read</button>
      </div>
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white p-2 rounded shadow-sm flex justify-between items-start"
          >
            <div>
              <p className="text-sm text-zinc-600">{notification.title}</p>
              <p className="text-xs text-zinc-500">{notification.content}</p>
              <p className="text-xs text-zinc-400">{notification.timestamp}</p>
            </div>
            <button className="text-zinc-400 hover:text-zinc-600">×</button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="w-full text-blue-500">View all Notifications</button>
      </div>
    </div>
  );
};

export default NotificationComponent;
