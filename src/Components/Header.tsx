import React, { useEffect } from 'react';
import { useAuth } from './Auth/AuthContext';
import NotificationBadge from '../Components/Notifications/Badge';
import { useNavigate } from 'react-router-dom';
const Header:React.FC<{children:React.ReactElement}> = ({children}) => {
  const navigation = useNavigate();
  const { user, signOut } = useAuth();
  useEffect(()=>{
    if(!user){
      navigation('login');
    }
  }, [user]);

  return (
    <div className="App">
        <header className='App-header'>
            <h3 className='App-logo' onClick={()=>{navigation('/')}}>Notification Demo</h3>
            {user && <div className='container'>
              <NotificationBadge />
              <button className='button' onClick={async ()=> { await signOut()} }> Logout </button>
            </div>}
        </header>
        {children}
    </div>
  );
}

export default Header;