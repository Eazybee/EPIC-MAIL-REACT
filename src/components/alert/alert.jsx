import React from 'react';
import Proptype from 'prop-types';

const AlertBox = props => (
  <React.Fragment>
    <div className={props.hidden ? 'modal hidden' : 'modal'} />
    <div className={props.hidden ? 'alert hidden' : 'alert'}>
      <div className="title-bar">
        <label>EPIC MAIL</label>
        <a href="#" onClick={props.onToggleAlert}>
          X
        </a>
      </div>
      <div className="alert-message">
        <p />
      </div>
    </div>
  </React.Fragment>
);

AlertBox.propTypes = {
  hidden: Proptype.bool.isRequired,
  onToggleAlert: Proptype.func.isRequired,
};

export default AlertBox;
