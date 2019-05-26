import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptype from 'prop-types';

class AlertBox extends Component {
  state = {
    hidden: true,
    content: '',
  };

  onHide = () => {
    this.setState({
      ...this.state,
      content: 'HIDE',
      hidden: !this.state.hidden,
    });
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loginERROR) {
  //     this.setState({ hidden: false, content: nextProps.loginERROR });
  //   }
  // }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.content === 'HIDE') {
      return { content: '', hidden: true };
    }

    if (nextProps.loginERROR !== nextState.content) {
      if (!nextProps.loginERROR) {
        return null;
      }
      return { content: nextProps.loginERROR, hidden: false };
    }
    return null;
  }

  render() {
    const { hidden } = this.state;
    return (
      <React.Fragment>
        <div className={hidden ? 'modal hidden' : 'modal'} />
        <div className={hidden ? 'alert hidden' : 'alert'}>
          <div className="title-bar">
            <label>EPIC MAIL</label>
            <a href="#" onClick={this.onHide}>
              X
            </a>
          </div>
          <div className="alert-message">
            <p>{this.state.content}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AlertBox.propTypes = {
  loginERROR: Proptype.string.isRequired,
};

const mapStateToProps = state => ({
  loginERROR: state.login.error,
});

export default connect(
  mapStateToProps,
  {},
)(AlertBox);
