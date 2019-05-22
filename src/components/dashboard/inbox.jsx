import React, { Component } from 'react';
import Proptype from 'prop-types';
import MailView from './mailView.jsx';
import ViewMail from './viewMail.jsx';

class Inbox extends Component {
  state = {
    to: 'All',
  };

  onChangeRadio = e => this.setState({ to: e.target.value });

  render() {
    return (
      <React.Fragment>
        {(!this.props.match.id2 || this.props.match.id2 !== 'view') && (
          <div className=" right-inbox">
            <div className="toolbar">
              <span>
                <input
                  type="radio"
                  value="All"
                  onChange={this.onChangeRadio}
                  name="to"
                  checked={this.state.to === 'All'}
                  required
                />{' '}
                All
              </span>
              <span>
                <input
                  type="radio"
                  value="Unread"
                  onChange={this.onChangeRadio}
                  name="to"
                  checked={this.state.to === 'Unread'}
                  required
                />{' '}
                Unread
              </span>
              <span>
                <input
                  type="radio"
                  value="Read"
                  onChange={this.onChangeRadio}
                  name="to"
                  checked={this.state.to === 'Read'}
                  required
                />{' '}
                Read
              </span>
              <button className="deleteButton">Delete</button>
            </div>
            {(!this.props.match.id2 || this.props.match.id2 !== 'view') && (
              <div className="inbox-view">
                <MailView
                  data={{
                    id: 1,
                    mail: 'a@b.com',
                    subject: 'Hello World!',
                    message: 'Andela cohort48',
                    date: 'Apr 11, 7:49 PM',
                    type: 'read',
                  }}
                  fromUrl="inbox"
                />
              </div>
            )}
          </div>
        )}

        {this.props.match.id2 === 'view' && (
          <div className="view-message">
            <ViewMail />
          </div>
        )}
      </React.Fragment>
    );
  }
}

Inbox.propTypes = {
  match: Proptype.object.isRequired,
};

export default Inbox;
