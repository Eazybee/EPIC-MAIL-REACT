import React from 'react';
import Proptype from 'prop-types';
import Header from './header.jsx';
import Menu from './menu.jsx';
import AlertBox from '../alert/alert.jsx';

const DashBoard = () => (
  <React.Fragment>
    <div className="vline" />
    <div className="inbox">
      <Header />
      <div className="bottom">
        <Menu />
        <div className="right">{/** For Composing and send mail */}</div>
      </div>
    </div>
    <AlertBox />
  </React.Fragment>
);

DashBoard.propTypes = {
  match: Proptype.object.isRequired,
};

export default DashBoard;
