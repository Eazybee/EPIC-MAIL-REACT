import React from 'react';
import Proptype from 'prop-types';

function Landing(props) {
  return (
    <div className="body">
      <div id="home" className="slider">
        <div />
        <div>
          <h1>
            Welcome To <span>Epic Mail</span>
          </h1>
          <p>
            Epic Mail is a mailing web app that enables user to exchange information over the
            internet.
          </p>
          <p className="bold">Bringing the world together</p>
          <a href="#">
            <span className="arrowDown">&#709;</span>
          </a>

          <span className="btns">
            <button onClick={() => props.history.push('/auth')} className="log-in">
              Join Us Today!
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  history: Proptype.object.isRequired,
};
export default Landing;
