import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from "firebase/compat";
import { db } from "../../Helpers/firebase";
import { useAuth } from "../Auth/AuthContext";

interface NotificationType {
  id: string;
  message?: string;
  userId?: string;
  isRead?: boolean;
}
interface NotificationContextType {
    notifications?: NotificationType[]
}


const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within an NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{children:React.ReactElement}> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]|undefined>();
  const { user } = useAuth();
  useEffect(() => {
    console.log('notiication user', user)
    if(user){
        console.log('notification provider')
        const unsubscribe = db.collection('notifications')
          .where('userId', '==', user?.uid)
          .onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            console.log('data change', data)
            setNotifications(data);
          });
        return () => unsubscribe();
    }
  }, [user]);

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
