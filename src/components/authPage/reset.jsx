import React from 'react';
import { Link } from 'react-router-dom';

const Reset = () => (
    <div className=" sign reset">
      <div>
        <label className="top">RESET PASSWORD</label>
        <label> </label>
      </div>
      <form name="signin" id="resetForm" action="#">
        <div>
          <input type="email" placeholder="Email Address" className="loginEmailAddress" required />
        </div>
        <div className="password">
          <input type="password" placeholder="New Password" />
        </div>
        <button type="submit">Reset</button>
      </form>
      <p>
        Already registered?{' '}
        <Link to="/auth/login" className="signInLink">
          {' '}
          Sign In
        </Link>
      </p>
      <p>
        Dont have an account ?{' '}
        <Link to="/auth/signup" className="signUpLink">
          {' '}
          Sign Up
        </Link>
      </p>
    </div>
);

export default Reset;
