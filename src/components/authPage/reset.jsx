import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Proptype from 'prop-types';
import Input from '../common/input.jsx';
import resetAction from '../../actions/reset';
import alertAction from '../../actions/alert';
import { validate } from '../../utilities';

class Reset extends Component {
  state = {
    email: '',
    password: '',
    disabled: false,
    reset: '',
    errorMsg: null,
  };

  inputs= [
    {
      type: 'email',
      placeholder: 'Email Address',
      name: 'email',
      required: true,
    },
    {
      type: 'password',
      placeholder: 'New Password',
      name: 'password',
      required: true,
    },
  ];

  onChange = event => this.setState({ [event.target.name]: event.target.value });

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
      errorMsg: null,
    });

    return this.props.resetAction(data);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reset !== prevState.reset) {
      return { reset: nextProps.reset };
    }

    if (nextProps.loading !== prevState.disabled) {
      return { disabled: nextProps.loading };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reset !== this.state.reset) {
      this.props.alertAction(this.state.reset);
    }
  }

  render() {
    return (
      <div className=" sign reset">
        <div>
          <label className="top">RESET PASSWORD</label>
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
  }
}

Reset.propTypes = {
  resetAction: Proptype.func.isRequired,
  alertAction: Proptype.func.isRequired,
  reset: Proptype.string.isRequired,
  loading: Proptype.bool.isRequired,
  history: Proptype.object.isRequired,
};

const mapStateToProps = state => ({
  reset: state.reset.success,
  loading: state.loading.loading,
});

export default connect(
  mapStateToProps,
  { resetAction, alertAction },
)(Reset);
