import React from 'react';
import GroupMember from './groupMember.jsx';

const GroupPage2 = () => (
  <div className="right-groupMember">
    <form action="#" id="editGroupName" />
    <div className="update">
      <div>
        <label>Group Name</label>
        <input className="hidden" type="text" form="editGroupName" required />
      </div>
      <div>
        <button>Edit</button>
        <button className="hidden" type="submit" form="editGroupName">
          {' '}
          Update
        </button>
        <button className="hidden">Cancel</button>
      </div>
    </div>
    <div className="addMember">
      <form action="#">
        <input type="email" placeholder="Johndoe@epicmailcom" name="email" required />
        <button type="submit">Add Member</button>
      </form>
    </div>
    <div className="member">
      <div className="toolbar">
        <button className="deleteButton">Delete</button>
      </div>
      <div className="inbox-view">
        <GroupMember data={{ id: 1, email: 'ajnbk@jn.com', pos: 0 }} />
      </div>
    </div>
  </div>
);

export default GroupPage2;
