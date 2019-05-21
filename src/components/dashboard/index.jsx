import React from 'react';
import Proptype from 'prop-types';
import Header from './header.jsx';
import Menu from './menu.jsx';
import Compose from './compose.jsx';
import AlertBox from '../alert/alert.jsx';

const DashBoard = props => (
  <React.Fragment>
    <div className="vline" />
    <div className="inbox">
      <Header />
      <div className="bottom">
        <Menu />
        <div className="right">{(props.match.params.id === 'compose' || !props.match.params.id) && <Compose />}</div>
      </div>
    </div>
    <AlertBox />
  </React.Fragment>
);

DashBoard.propTypes = {
  match: Proptype.object.isRequired,
};

export default DashBoard;
