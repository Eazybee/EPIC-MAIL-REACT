import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptype from 'prop-types';
import { connect } from 'react-redux';
import loginAction from '../../actions/login';

class Login extends Component {
  state = {
    email: '',
    password: '',
    disabled: false,
    login: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const obj = { email, password };
    this.props.loginAction(obj);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.login !== prevState.login) {
      return { login: nextProps.login };
    }
    if (nextProps.loading !== prevState.disabled) {
      return { disabled: nextProps.loading };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.login) {
      localStorage.setItem('auth', prevProps.login);
      localStorage.setItem('userEmail', this.state.email.toLowerCase());
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="sign signIn">
        <div>
          <label className="top">WELCOME BACK</label>
          <label> </label>
        </div>
        <form name="signin" id="signInForm" onSubmit={this.onSubmit}>
          <div>
            <input
              type="email"
              placeholder="Johndoe@epicmail.com"
              name="email"
              value={email}
              onChange={this.onChange}
              disabled={disabled}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="******"
              name="password"
              value={password}
              onChange={this.onChange}
              disabled={disabled}
              required
            />
          </div>
          <button type="submit" disabled={disabled}>
            Login
          </button>
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
  }
}

Login.propTypes = {
  history: Proptype.object.isRequired,
  loginAction: Proptype.func.isRequired,
  login: Proptype.string.isRequired,
  loginERROR: Proptype.string.isRequired,
  loading: Proptype.bool.isRequired,
};

const mapStateToProps = state => ({
  login: state.login.token,
  loginERROR: state.login.error,
  loading: state.login.loading,
});

export default connect(
  mapStateToProps,
  { loginAction },
)(Login);
