import React from 'react';
import Proptype from 'prop-types';
import Header from './header.jsx';
import Menu from './menu.jsx';
import Compose from './compose.jsx';
import Inbox from './inbox.jsx';
import Sent from './sent.jsx';
import Draft from './draft.jsx';
import GroupPage from './groups/index.jsx';
import AlertBox from '../alert/alert.jsx';

const DashBoard = props => (
  <React.Fragment>
    <div className="vline" />
    <div className="inbox">
      <Header />
      <div className="bottom">
        <Menu />
        <div className="right">
          {props.match.params.id === 'inbox' && <Inbox match={props.match.params} />}
          {(props.match.params.id === 'compose' || !props.match.params.id) && <Compose />}
          {props.match.params.id === 'sent' && <Sent match={props.match.params} />}
          {props.match.params.id === 'draft' && <Draft match={props.match.params} />}
          {props.match.params.id === 'group' && <GroupPage match={props.match.params} />}
        </div>
      </div>
    </div>
    <AlertBox />
  </React.Fragment>
);

DashBoard.propTypes = {
  match: Proptype.object.isRequired,
};

export default DashBoard;
