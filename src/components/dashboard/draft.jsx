import React from 'react';
import MailView from './mailView.jsx';

const Draft = () => (
  <div className="right-draft">
    <div className="toolbar">
      <button className="deleteButton">Delete</button>
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
        fromUrl="draft"
      />
    </div>
  </div>
);

export default Draft;
