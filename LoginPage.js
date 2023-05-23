import React, { useState } from "react";
import Navbar from './Navbar';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [allEntry, setAllEntry] = useState([]);

  const SubmitForm = (e) => {
    e.preventDefault();

    const newEntry = [username, password]
    // const submit = (e) => {
      
    // }

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  return (
    <div className='App'>
      <Navbar />
      <div className="containerlog">
        <h1 className="headd">Login Form</h1>

        <input type="text" placeholder="Username" className="use"
          autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}></input><br />


        <input type="password" placeholder="Password" className="pass"
          autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}></input>

          
        <button className="submit" onClick={(e) => alert(`Username:${username}\nPassword:${password}`)}>Submit</button>
      </div>
    </div>
  )
}

export default Login;
 