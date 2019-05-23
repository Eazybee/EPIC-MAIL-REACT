import React from 'react';
import { Link } from 'react-router-dom';
import Proptype from 'prop-types';

const Group = (props) => {
  const { id, name } = props.data;
  return (
    <div>
      <input type="checkbox" value={id} />
      <Link to="/dashboard/group/view">{name}</Link>
    </div>
  );
};

Group.propTypes = {
  data: Proptype.object.isRequired,
};
export default Group;
