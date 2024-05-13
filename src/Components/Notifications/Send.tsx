import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Helpers/firebase"
import { useAuth } from '../Auth/AuthContext';

const NotificationSend = ()=> {
  const { user } = useAuth();
  const onClickSendNotification =async (msg:string)=>{
    const data = {
      userId: user?.uid,
      message: msg,
      isRead:false
    }
    console.log(data);
    await db.collection('notifications').add(data);
  }
  return (
    <div className="App-container">
        <div>Send notification</div>
        <br/>
        <div className="buttonContainer">
          <button className="button" onClick={async ()=>{ await onClickSendNotification("Notification 1 content")}}> Notification 1</button>
          <button className="button" onClick={async ()=>{ await onClickSendNotification("Notification 2 content")}}> Notification 2</button>
          <button className="button" onClick={async ()=>{ await onClickSendNotification("Notification 3 content")}}> Notification 3</button>
        </div>
    </div>
  );
}

export default NotificationSend;
