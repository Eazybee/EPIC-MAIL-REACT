import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import Input from '../common/input.jsx';
import signupAction from '../../actions/signup';
import alertAction from '../../actions/alert';
import { validate } from '../../utilities';


class Signup extends Component {
  state = {
    email: '',
    firstName: '',
    password: '',
    rePassword: '',
    disabled: false,
    signup: '',
    errorMsg: null,
  };

  inputs = [
    {
      type: 'text',
      placeholder: 'First Name',
      name: 'firstName',
      required: true,
    },
    {
      type: 'email',
      placeholder: 'Email Address',
      name: 'email',
      required: true,
    },
    {
      type: 'password',
      placeholder: 'Password',
      name: 'password',
      required: true,
    },
    {
      type: 'password',
      placeholder: 'Re-Password',
      name: 'rePassword',
      required: true,
    },
  ];

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.signup !== prevState.signup) {
      return { signup: nextProps.signup };
    }

    if (nextProps.loading !== prevState.disabled) {
      return { disabled: nextProps.loading };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.signup !== this.state.signup) {
      this.props.alertAction('Sign up successful, Please Check your mail');
      setTimeout(() => {
        this.props.history.push('/auth/login');
      }, 5000);
    }
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const {
      email, firstName, password, rePassword,
    } = this.state;

    const obj = {
      firstName, email, password, rePassword,
    };

    const rules = {
      email: 'required|email',
      firstName: 'required|string|alpha|min:2',
      password: 'required|string',
      rePassword: 'required|string',
    };

    const [state, data, message] = validate(obj, rules);

    if (!state) {
      return this.setState({
        ...this.state,
        ...data,
        errorMsg: message,
      });
    }

    if (password !== rePassword) {
      return this.setState({
        ...this.state,
        errorMsg: 'Password do not match',
      });
    }

    this.setState({
      ...this.state,
      errorMsg: null,
    });

    return this.props.signupAction(data);
  };

  render() {
    return (
      <div className="sign signUp">
        <div>
          <label className="top">JOIN EPICMAIL TODAY</label>
          {this.state.errorMsg && <label className='errorMsg'>{this.state.errorMsg}</label>}
        </div>
        <form onSubmit={this.onSubmit}>
          {this.inputs.map(data => (
            <div key={data.name}>
              <Input
                data={data}
                disabled={this.state.disabled}
                onChange={this.onChange}
                value={this.state[data.name]}
                key={data.name}
              />
            </div>
          ))}
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
  }
}

Signup.propTypes = {
  signupAction: Proptype.func.isRequired,
  alertAction: Proptype.func.isRequired,
  signup: Proptype.string.isRequired,
  loading: Proptype.bool.isRequired,
  history: Proptype.object.isRequired,
};

const mapStateToProps = state => ({
  signup: state.signup.token,
  loading: state.loading.loading,
});

export default connect(
  mapStateToProps,
  { signupAction, alertAction },
)(Signup);
