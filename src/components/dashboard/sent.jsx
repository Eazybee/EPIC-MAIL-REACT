import React from 'react';
import Proptype from 'prop-types';
import MailView from './mailView.jsx';
import ViewMail from './viewMail.jsx';

const Sent = props => (
  <React.Fragment>
    {(!props.match.id2 || props.match.id2 !== 'view') && (
      <div className="right-sent">
        <div className="toolbar">
          <button className="deleteButton">Delete</button> <button id="retract">Retract</button>
        </div>
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
            fromUrl="sent"
          />
        </div>
      </div>
    )}
    {props.match.id2 === 'view' && (
      <div className="view-message">
        <ViewMail />
      </div>
    )}
  </React.Fragment>
);

Sent.propTypes = {
  match: Proptype.object.isRequired,
};

export default Sent;
