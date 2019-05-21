import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => (
    <div className="sign signUp">
      <div>
        <label className="top">JOIN EPICMAIL TODAY</label>
        <label> </label>
      </div>
      <form name="signup" id="signUpForm" action="#">
        <div>
          <input type="text" placeholder="First Name" id="fName" name="signupFirstName" required />
        </div>
        <div>
          <input type="text" id="emailAddress" name="signupEmail" placeholder="Email Address" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" name="signupPassword" required />
        </div>
        <div>
          {' '}
          <input type="password" id="rePassword" name="signupRePassword" placeholder="Re-Password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already registered?{' '}
        <Link to="/auth/login" className="signInLink">
          {' '}
          Sign In
        </Link>
      </p>
      <p>
        Forget Your Password?{' '}
        <Link to="/auth/reset" className="resetLink">
          Reset
        </Link>
      </p>
    </div>
);

export default Signup;
