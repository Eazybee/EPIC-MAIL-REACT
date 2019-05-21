import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <div className="left show">
    <ul>
      <li>
        <NavLink activeClassName="active" to="/dashboard/compose">
          Compose
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/dashboard/inbox">
          Inbox
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/dashboard/sent">
          Sent
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/dashboard/draft">
          Draft
        </NavLink>
      </li>
      <li className="groups">
        <NavLink activeClassName="active" to="/dashboard/group">
          Groups
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Menu;
