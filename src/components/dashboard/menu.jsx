import React from 'react';

const Menu = () => (
  <div className="left show">
    <ul>
      <li>
        <a className="active" href="#Compose">
          Compose
        </a>
      </li>
      <li>
        <a href="#Inbox">Inbox</a>
      </li>
      <li>
        <a href="#Sent">Sent</a>
      </li>
      <li>
        <a href="#Draft">Draft</a>
      </li>
      <li className="groups">
        <a href="#Group">Groups</a>
      </li>
    </ul>
  </div>
);

export default Menu;
