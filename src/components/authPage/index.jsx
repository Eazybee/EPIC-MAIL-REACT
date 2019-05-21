import React from 'react';
import Proptype from 'prop-types';
import Header from '../header/header.jsx';
import Login from './login.jsx';
import AlertBox from '../header/alert.jsx';
import Signup from './signup.jsx';
import Reset from './reset.jsx';

const AuthPage = props => (
  <React.Fragment>
    <div className="loginPage">
      <Header />
      <div className="blind" />
      {props.match.params.id === 'signup' && <Signup />}
      {props.match.params.id === 'reset' && <Reset />}
      {(props.match.params.id === 'login' || !props.match.params.id) && <Login />}

      <AlertBox />
    </div>
  </React.Fragment>
);

AuthPage.propTypes = {
  match: Proptype.object.isRequired,
};

export default AuthPage;
