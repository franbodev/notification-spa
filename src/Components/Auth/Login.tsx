import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "./AuthContext";
const Login = () => {
  const nativate = useNavigate();
  const { user, signIn, signOut } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string|null>(null);

  useEffect(()=>{
    if(user){
        nativate('/');
    }
  }, [user])
  const onLoginClick = async () => {
    const loginResult = await signIn(email, password);
    if(!loginResult){
        setError('Invalid email or password');
    }
  }

  return (
    <div className="App-container">
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'fieldContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'field'}
        />
      </div>
      <br />
      <div className={'fieldContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'field'}
        />
      </div>
      <label className="errorLabel">{error}</label>
      <br />
      <div className={'fieldContainer'}>
        <input className={'button'} type="button" onClick={onLoginClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login