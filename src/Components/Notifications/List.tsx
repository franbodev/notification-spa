import React, { useState, useEffect } from 'react';
import { useAuth } from "../Auth/AuthContext";
import { useNotification } from "./NotificationContext";
import { db } from '../../Helpers/firebase';
const Notifications: React.FC = () => {
  const { notifications } = useNotification();
  const { user, signIn, signOut } = useAuth();

  const markAsRead = async (id: string) => {
    await db.collection('notifications').doc(id).update({ isRead: true });
  };

  return (
    <div className='App-container'>
      <h4>Notification List</h4>
      <ul>
        {notifications && notifications.map(notification => (
          <li key={notification.id}>
            <span>{notification.message}</span>
            {!notification.isRead && <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;