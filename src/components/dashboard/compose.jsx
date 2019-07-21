import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import sendMessageAction from '../../actions/sendMessage';
import sendGroupMessageAction from '../../actions/sendGroupMessage';
import saveMessageAction from '../../actions/saveMessage';
import alertAction from '../../actions/alert';
import Spinner from '../common/spinner.jsx';
import requestApi, { validate } from '../../utilities/index';

class Compose extends Component {
  state = {
    to: 'Individual',
    email: '',
    group: '',
    subject: '',
    message: '',
    disabled: false,
    groups: null,
    errorMsg: null,
    sent: '',
    save: '',
    sentGroup: '',
  };

  async componentDidMount() {
    this.getGroups();
  }

  getGroups = async () => {
    try {
      const groups = await requestApi('GET', '/groups/', null, true);
      if ('error' in groups) {
        throw new Error(groups.error);
      }

      this.setState({
        ...this.state,
        groups: groups.data[0].message ? [] : groups.data,
      });
    } catch (error) {
      this.props.alertAction(error.message);
      if (error.message === 'ERROR: Check your internet connection and try again') {
        setTimeout(this.getGroups, 10000);
      }
    }
  };

  onChangeRadio = event => this.setState({ to: event.target.value });

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();

    const {
      to, email, group, subject, message,
    } = this.state;

    const obj = {
      subject, message,
    };

    const rules = {
      subject: 'required|string',
      message: 'required|string',
    };

    if (to === 'Individual') {
      obj.email = email;
      rules.email = 'required|email';
    }

    if (to === 'Group') {
      obj.group = group;
      rules.group = 'required|numeric';
    }

    const [valid, data, errorMsg] = validate(obj, rules);

    this.setState({
      ...this.state,
      ...data,
      errorMsg,
    });

    if (valid) {
      const postData = {
        subject: data.subject,
        message: data.message,
        receiverEmail: data.email,
      };

      const postGroupData = {
        data: {
          subject: data.subject,
          message: data.message,
        },
        id: data.group,
      };
      if (event.target.id === 'save') {
        if (data.group) {
          // this.props.saveGroupMessageAction(postData);
        } else {
          this.props.saveMessageAction(postData);
        }
      } else if (data.group) {
        this.props.sendGroupMessageAction(postGroupData);
      } else {
        this.props.sendMessageAction(postData);
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const resetInput = {
      email: '',
      group: '',
      subject: '',
      message: '',
    };

    if (nextProps.sent !== prevState.sent) {
      return {
        sent: nextProps.sent,
        ...resetInput,
      };
    }

    if (nextProps.sentGroup !== prevState.sentGroup) {
      return {
        sentGroup: nextProps.sentGroup,
        ...resetInput,
      };
    }

    if (nextProps.save !== prevState.save) {
      return {
        save: nextProps.save,
        ...resetInput,
      };
    }

    if (nextProps.loading !== prevState.disabled) {
      return { disabled: nextProps.loading };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sent !== this.state.sent) {
      this.props.alertAction('Message Sent Successfully');
    }
    if (prevState.save !== this.state.save) {
      this.props.alertAction('Message Save Successfully');
    }
    if (prevState.sentGroup !== this.state.sentGroup) {
      this.props.alertAction('Message Sent Successfully');
    }
  }

  render() {
    return (
      <>
        <div className="right-compose">
        {this.state.errorMsg && <label className='errorMsg'>{this.state.errorMsg}</label>}
          <form onSubmit={this.onSubmit} key={`${this.props.sent}${this.props.save}${this.props.sentGroup}`}>
            <div className="address">
              <div>
                <label>To :</label>
                <span>
                  <input
                    type="radio"
                    value="Individual"
                    onChange={this.onChangeRadio}
                    name="to"
                    checked={this.state.to === 'Individual'}
                    required
                  />{' '}
                  Individual
                </span>
                <span>
                  <input
                    type="radio"
                    value="Group"
                    onChange={this.onChangeRadio}
                    name="to"
                    checked={this.state.to === 'Group'}
                    required
                  />{' '}
                  Group
                </span>
              </div>
              <div>
                <label>Address :</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  placeholder="Johndoe@epicmail.com"
                  className={this.state.to === 'Individual' ? '' : 'hidden'}
                  required={this.state.to === 'Individual'}
                />
                <select
                  className={this.state.to === 'Group' ? '' : 'hidden'}
                  required={this.state.to === 'Group'}
                  value={this.state.group}
                  onChange={event => this.setState({
                    ...this.state,
                    group: event.target.value,
                  })}
                >
                  <option disabled="" value="">Select Group</option>
                  {this.state.groups && this.state.groups.map(group => <option
                    key={group.id}
                    value={group.id}
                  >{group.name}</option>)}
                </select>
              </div>
            </div>
            <div className="message">
              <input
                type="text"
                name="subject"
                onChange={this.onChange}
                placeholder="Enter Subject / Topic"
                required
              />
              <textarea
                name="message"
                onChange={this.onChange}
                placeholder="Enter message body"
                required
              />
            </div>
            <button type="submit" id="send">SEND</button>
            <button
              onClick={this.onSubmit}
              id="save"
              className={this.state.to === 'Individual' ? '' : 'hidden'}
            >SAVE</button>
          </form>
        </div>
        {(!this.state.groups || this.state.disabled) ? <Spinner /> : ''}
      </>
    );
  }
}

Compose.propTypes = {
  sendMessageAction: Proptype.func.isRequired,
  sendGroupMessageAction: Proptype.func.isRequired,
  saveMessageAction: Proptype.func.isRequired,
  alertAction: Proptype.func.isRequired,
  sent: Proptype.string.isRequired,
  save: Proptype.string.isRequired,
  sentGroup: Proptype.string.isRequired,
  loading: Proptype.bool.isRequired,
};

const mapStateToProps = state => ({
  sentGroup: state.sendGroupMessage.success,
  sent: state.sendMessage.success,
  save: state.saveMessage.success,
  loading: state.loading.loading,
});

export default connect(
  mapStateToProps,
  {
    sendMessageAction,
    saveMessageAction,
    sendGroupMessageAction,
    alertAction,
  },
)(Compose);
