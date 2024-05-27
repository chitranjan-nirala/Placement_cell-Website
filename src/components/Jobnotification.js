import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the WebSocket server on port 3001

const Jobnotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("Socket connected:", socket.connected);
      setIsSocketConnected(true);
    });

    socket.on('disconnect', () => {
      console.log("Socket disconnected:", socket.connected);
      setIsSocketConnected(false);
    });

    // Listen for incoming job notifications
    socket.on('jobNotification', (notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendNotification = () => {
    console.log("Send Notification button clicked");
    // Emit job notification to the server
    socket.emit('jobNotification', 'New job available');
  };

  return (
    <div>
      <h1>Job Notifications</h1>
      <button onClick={sendNotification} disabled={!isSocketConnected}>Send Notification</button>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jobnotification;
