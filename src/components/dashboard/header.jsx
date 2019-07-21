import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptype from 'prop-types';

class Header extends Component {
  state = {
    direction: 'out',
  };

  handleLogOut = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('userEmail');
    this.props.history.push('/auth/login');
  }

  onClick = (e) => {
    const cName = e.target.name === 'out' ? 'in' : 'out';
    this.setState({ direction: cName });
  };

  render() {
    return (
      <div className="top">
        <div>
          <div>
            <h1> EPIC MAIL</h1>
            <p>{localStorage.getItem('userEmail')}</p>
          </div>
          <div>
            <button onClick={this.handleLogOut}>Log Out</button>
          </div>
        </div>
        <div className="seek">
          <button
            name="out"
            onClick={this.onClick}
            className={this.state.direction === 'out' ? 'out' : 'out hidden'}
          >
            &#8614;
          </button>
          <button
            name="in"
            onClick={this.onClick}
            className={this.state.direction === 'in' ? 'in' : 'in hidden'}
          >
            &#8612;
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: Proptype.object.isRequired,
};

export default withRouter(Header);
