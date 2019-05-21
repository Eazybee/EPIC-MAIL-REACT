import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
    <div className="sign signIn">
      <div>
        <label className="top">WELCOME BACK</label>
        <label> </label>
      </div>
      <form name="signin" id="signInForm" action="">
        <div>
          <input type="email" placeholder="Johndoe@epicmail.com" id="loginEmailAddress" name="loginEmail" required />
        </div>
        <div>
          <input type="password" placeholder="******" id="loginPassword" name="loginPassword" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Forget Your Password?{' '}
        <Link to="/auth/reset" className="resetLink">
          Reset
        </Link>
      </p>
      <p>
        Dont have an account?{' '}
        <Link to="/auth/signup" className="signUpLink">
          {' '}
          Sign Up
        </Link>
      </p>
    </div>
);

export default Login;
