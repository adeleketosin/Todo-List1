import React from "react";
import { Link } from "react-router-dom";
// import Form from './Form';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="bar">
          <button className="btn"><Link to="/" style={{textDecoration:'none'}}>API Page</Link></button>
        </li>
        <li>
        <button className="btn"><Link to="/login" style={{textDecoration:'none'}}>Login Form</Link></button>
        </li>
        <li>
        <button className="btn"><Link to="/todolist" style={{textDecoration:'none'}}>TodoList Page</Link></button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
