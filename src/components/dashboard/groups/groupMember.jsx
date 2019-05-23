import React from 'react';
import Proptype from 'prop-types';

const GroupMember = (props) => {
  const { id, email, pos } = props.data;
  return (
    <div>
      <input type="checkbox" value={id} />
      <p>{email}</p>
      <label>{pos ? 'Admin' : 'Member'}</label>
    </div>
  );
};

GroupMember.propTypes = {
  data: Proptype.object.isRequired,
};

export default GroupMember;
