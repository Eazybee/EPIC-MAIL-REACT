import React from 'react';
import Proptype from 'prop-types';
import Group from './group.jsx';
import GroupPage2 from './groupPage2.jsx';

const GroupPage = props => (
  <React.Fragment>
    {(!props.match.id2 || props.match.id2 !== 'view') && (
      <div className="right-group">
        <div className="create">
          <form action="#" id="createGroup" />
          <div>
            <input type="text" placeholder="Group Name" form="createGroup" required />
            <button form="createGroup" type="submit">
              Create Group
            </button>
          </div>
        </div>
        <div className="groups">
          <div className="btn">
            <button>Delete</button>
          </div>
          <div>
            <Group data={{ id: 1, name: 'family' }} />
          </div>
        </div>
      </div>
    )}
    {props.match.id2 === 'view' && (
      <div className="view-message">
        <GroupPage2 />
      </div>
    )}
  </React.Fragment>
);

GroupPage.propTypes = {
  match: Proptype.object.isRequired,
};
export default GroupPage;
