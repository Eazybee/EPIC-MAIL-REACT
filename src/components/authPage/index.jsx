import React, { Component } from 'react';
import Proptype from 'prop-types';
import { connect } from 'react-redux';
import Header from './header.jsx';
import Login from './login.jsx';
import AlertBox from '../alert/alert.jsx';
import Signup from './signup.jsx';
import Reset from './reset.jsx';
import loginAction from '../../actions/login';

class AuthPage extends Component {
  state = {
    hidden: true,
  };

  onToggleAlert = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  componentDidMount() {
    this.props.loginAction();
  }

  hidden = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="loginPage">
          <Header />
          <div className="blind" />
          {this.props.match.params.id === 'signup' && <Signup />}
          {this.props.match.params.id === 'reset' && <Reset />}
          {(this.props.match.params.id === 'login' || !this.props.match.params.id) && <Login />}
          <AlertBox hidden={this.state.hidden} onToggleAlert={this.onToggleAlert} />
        </div>
      </React.Fragment>
    );
  }
}

AuthPage.propTypes = {
  match: Proptype.object.isRequired,
  loginAction: Proptype.func.isRequired,
  loginError: Proptype.object,
};

const mapStateToProps = state => ({
  login: state.login.token,
});
export default connect(
  mapStateToProps,
  { loginAction },
)(AuthPage);
