import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Components/Auth/AuthContext"

function App() {
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(()=>{
    console.log(user);
    if(!user){
      navigate("/login");
    }
  }, [user])
  return (
    <div className="App-container">
        <div>Test</div>
    </div>
  );
}

export default App;
