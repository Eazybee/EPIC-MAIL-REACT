import React from 'react';

export default function AlertBox() {
  return (
    <React.Fragment>
      <div className="modal hidden" />
      <div className="alert hidden">
        <div className="title-bar">
          <label>EPIC MAIL</label>
          <a href="#">X</a>
        </div>
        <div className="alert-message">
          <p />
        </div>
      </div>
    </React.Fragment>
  );
}
