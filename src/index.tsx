import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./Components/Auth/AuthContext";
import { NotificationProvider } from "./Components/Notifications/NotificationContext";
import './index.css';
import Header from './Components/Header';
import App from './App';
import Login from './Components/Auth/Login';
import SendNotification from './Components/Notifications/Send';
import NotificationList from './Components/Notifications/List';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Header>
            <Routes>
              <Route path='/' element={<SendNotification />}/>
              <Route path='login' element={<Login />} />
              <Route path='notifications/list' element={<NotificationList />} />
            </Routes>
          </Header>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
