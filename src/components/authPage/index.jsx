import React, { Component } from 'react';
import Proptype from 'prop-types';
import Header from './header.jsx';
import Login from './login.jsx';
import AlertBox from '../common/alert.jsx';
import Signup from './signup.jsx';
import Reset from './reset.jsx';

class AuthPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="loginPage">
          <Header />
          <div className="blind" />
          {this.props.match.params.id === 'signup' && <Signup history={this.props.history} />}
          {this.props.match.params.id === 'reset' && <Reset history={this.props.history}/>}
          {(this.props.match.params.id === 'login' || !this.props.match.params.id) && (
            <Login history={this.props.history} />
          )}
        </div>
        <AlertBox />
      </React.Fragment>
    );
  }
}

AuthPage.propTypes = {
  match: Proptype.object.isRequired,
  history: Proptype.object.isRequired,
};

export default AuthPage;
