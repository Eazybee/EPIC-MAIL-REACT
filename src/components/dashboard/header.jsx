import React from 'react';

const Header = () => (
    <div className="top">
      <div>
        <div>
          <h1> EPIC MAIL</h1>
          <p />
        </div>
        <div>
          <button>Log Out</button>
        </div>
      </div>
      <div className="seek">
        <button className="out">&#8614;</button>
        <button className="in hidden">&#8612;</button>
      </div>
    </div>
);

export default Header;
