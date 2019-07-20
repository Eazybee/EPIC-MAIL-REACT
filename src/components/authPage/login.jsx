import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptype from 'prop-types';
import { connect } from 'react-redux';
import Input from '../common/input.jsx';
import loginAction from '../../actions/login';
import { validate } from '../../utilities';

class Login extends Component {
  state = {
    email: '',
    password: '',
    disabled: false,
    login: '',
    errorMsg: null,
  };

  inputs = [
    {
      type: 'email',
      placeholder: 'Johndoe@epicmail.com',
      name: 'email',
      required: true,
    },
    {
      type: 'password',
      placeholder: '*******',
      name: 'password',
      required: true,
    },
  ];

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const obj = { email, password };

    const rules = {
      email: 'required|email',
      password: 'required|string',
    };

    const [state, data, message] = validate(obj, rules);

    if (!state) {
      return this.setState({
        ...this.state,
        ...data,
        errorMsg: message,
      });
    }

    this.setState({
      ...this.state,
      ...data,
      errorMsg: null,
    });
    return this.props.loginAction(data);
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

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
    if (prevState.login !== this.state.login) {
      localStorage.setItem('auth', this.state.login);
      localStorage.setItem('userEmail', this.state.email.toLowerCase());
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <div className="sign signIn">
        <div>
          <label className="top">WELCOME BACK</label>
          {this.state.errorMsg && <label className='errorMsg'>{this.state.errorMsg}</label>}
        </div>
        <form onSubmit={this.onSubmit}>
          {this.inputs.map(data => (
            <div key={data.name}>
              <Input
                data={data}
                disabled={disabled}
                onChange={this.onChange}
                value={this.state[data.name]}
                key={data.name}
              />
            </div>
          ))}
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
  loading: Proptype.bool.isRequired,
};

const mapStateToProps = state => ({
  login: state.login.token,
  loading: state.loading.loading,
});

export default connect(
  mapStateToProps,
  { loginAction },
)(Login);
