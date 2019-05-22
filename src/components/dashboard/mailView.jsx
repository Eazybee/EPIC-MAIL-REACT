import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptype from 'prop-types';

class MailView extends Component {
  state = {
    id: '',
    mail: '',
    subject: '',
    message: '',
    date: '',
    type: '',
  };

  onClick = () => {
    this.props.history.push(`/dashboard/${this.props.fromUrl}/view`);
  };

  render() {
    const {
      id, mail, subject, message, date, type,
    } = this.props.data;
    return (
      <div className={type}>
        <input type="checkbox" value={id} />
        <p onClick={this.onClick}>{mail}</p>
        <div>
          <p className="subject" onClick={this.onClick}>
            {subject}
          </p>
          <p className="msg" onClick={this.onClick}>
            {message}
          </p>
        </div>
        <label>{date}</label>
      </div>
    );
  }
}

MailView.propTypes = {
  data: Proptype.object.isRequired,
  history: Proptype.object.isRequired,
  fromUrl: Proptype.string.isRequired,
};
export default withRouter(MailView);
