import React, { Component } from 'react';
import Proptype from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MailView from './mailView.jsx';
import ViewMail from './viewMail.jsx';
import getMessageAction from '../../actions/getMessage';
import requestApi, { dateFormatter } from '../../utilities/index';
import alertAction from '../../actions/alert';
import Spinner from '../common/spinner.jsx';

class Inbox extends Component {
  state = {
    to: 'messages',
    messages: null,
    read: null,
    unread: null,
    view: false,
    viewData: [],
    selected: [],
  };

  componentDidMount() {
    if (this.props.match.params.id2 !== 'view') {
      this.getInboxes();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.success.length) {
      return { viewData: nextProps.success };
    }
    if (nextProps.loading !== prevState.disabled) {
      return { disabled: nextProps.loading };
    }
    return null;
  }

  onChangeRadio = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ to: value });
    const path = value === 'messages' ? '/messages' : `/messages/${value}`;
    this.getInboxes(value, path);
  };

  getInboxes = async (type = 'messages', path = '/messages') => {
    try {
      const messages = await requestApi('GET', path, null, true);
      if ('error' in messages) {
        throw new Error(messages.error);
      }
      this.setState({
        ...this.state,
        [type]: (Object.keys(messages.data[0]).length === 1) ? [] : messages.data,
      });
    } catch (error) {
      this.props.alertAction(error.message);
      if (error.message === 'ERROR: Check your internet connection and try again') {
        setTimeout(this.getInboxes, 10000);
      }
    }
  }

  onView = (id) => {
    this.props.getMessageAction(`/messages/${id}`);
    this.props.history.push('/dashboard/inbox/view');
  }

  onSelect= (selected, id) => {
    const select = this.state.selected;
    if (selected) {
      select.push(id);
    } else {
      select.pop(id);
    }

    this.setState({
      ...this.state,
      selected: select,
    });
  }

  handleDelete = () => {
    const { selected, to } = this.state;
    Promise.all(selected.map(async (id) => {
      try {
        const messages = await requestApi('DELETE', `/messages/${id}`, null, true);
        if ('error' in messages) {
          throw new Error(messages.error);
        }
      } catch (error) {
        if (error.message === 'ERROR: Check your internet connection and try again') {
          this.props.alertAction(error.message);
        }
      }
    }));

    const newMessages = this.state[to].filter((msg) => {
      const deleted = selected.find(id => msg.id !== id);
      return deleted && true;
    });

    this.setState({
      ...this.state,
      [to]: newMessages,
      selected: [],
    });
  }

  render() {
    if (this.props.match.params.id2 === 'view') {
      if (!this.state.viewData.length) {
        return <Spinner />;
      }
      return (
        <div className="view-message">
          <ViewMail data={this.state.viewData} />
        </div>
      );
    }

    return (
      <>
        <div className=" right-inbox">
          <div className="toolbar">
            <span>
              <input
                type="radio"
                value="messages"
                onChange={this.onChangeRadio}
                name="to"
                checked={this.state.to === 'messages'}
                required
              />{' '}
              All
            </span>
            <span>
              <input
                type="radio"
                value="unread"
                onChange={this.onChangeRadio}
                name="to"
                checked={this.state.to === 'unread'}
                required
              />{' '}
              Unread
            </span>
            <span>
              <input
                type="radio"
                value="read"
                onChange={this.onChangeRadio}
                name="to"
                checked={this.state.to === 'read'}
                required
              />{' '}
              Read
            </span>
            <button className="deleteButton" onClick={this.handleDelete}>Delete</button>
          </div>
          {(
            <div className="inbox-view">
              { this.state[this.state.to] && this.state[this.state.to].map(message => (
              <MailView
                key={message.id}
                onClick={this.onView}
                onSelect={this.onSelect}
                data={{
                  id: message.id,
                  mail: message.senderEmail,
                  subject: message.subject,
                  message: message.message,
                  date: dateFormatter(message.createdOn),
                  type: message.status,
                }}
                fromUrl="inbox"
              />
              ))}
            </div>
          )}
        </div>
        {!this.state[this.state.to] && <Spinner/>}
      </>
    );
  }
}

Inbox.propTypes = {
  match: Proptype.object.isRequired,
  history: Proptype.object.isRequired,
  success: Proptype.array.isRequired,
  loading: Proptype.bool.isRequired,
  getMessageAction: Proptype.func.isRequired,
  alertAction: Proptype.func.isRequired,
};

const mapStateToProps = state => ({
  success: state.getMessage.success,
  loading: state.loading.loading,
});

export default connect(
  mapStateToProps,
  { getMessageAction, alertAction },
)(withRouter(Inbox));
