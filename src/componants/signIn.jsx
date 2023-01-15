import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import './css/login.css'


function Signin() {
    
    return(
        <div><div className="container">
        <form class="signIn">
    <h3>Welcome Back !</h3>
    <button class="fb" type="button">Log In With Facebook</button>
    <p>- or -</p>
    <input type="email" placeholder="Insert eMail" autocomplete='off' reqired />
    <input type="password" placeholder="Insert Password" reqired />
    <button class="form-btn sx back" type="button">Back</button>
    <button class="form-btn dx" type="submit">Log In</button>
  </form>
      </div>
      </div>
    );
  }

export default Signin;