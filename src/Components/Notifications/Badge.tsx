import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext"
import { useNotification } from "./NotificationContext";

const NotificationBadge = ()=> {
  const { notifications } = useNotification();
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(()=>{
    if(notifications){
        const newNotifications = notifications.filter((notification)=>notification.isRead===false);
        setNewNotificationCount(newNotifications.length);
    }
  }, [notifications])
  const [newNotificationCount, setNewNotificationCount ] = useState(notifications?.length||0);
  return (
    <div className="Badge">
        <button className="button" onClick={()=>{navigate('/notifications/list')}}>New Notifications ({newNotificationCount})</button>
    </div>
  );
}

export default NotificationBadge;
