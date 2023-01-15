import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import './css/login.css'


function Login() {
    
    return(
        <div><div className="container">
        <form className="signUp">
          <h3>Create Your Account</h3>
          <p>Just enter your email address
      and your password for join.
          </p>
          <input className="w100" type="email" placeholder="Insert eMail" reqired autocomplete='off' />
          <input type="password" placeholder="Insert Password" reqired />
          <input type="password" placeholder="Verify Password" reqired />
          <button className="form-btn sx log-in" type="button" >Log In</button>
          <button className="form-btn dx" type="submit" >Sign Up</button>
        </form>
      </div>
      </div>
    );
  }

export default Login;