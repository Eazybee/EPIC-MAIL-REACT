import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

const MyRoutes = ({
  component: Component,
  type,
  ...rest
}) => {
  if (type === 'private') {
    return <Route {...rest} render={props => (
      localStorage.getItem('auth') ? <Component {...props}/>
        : <Redirect to={{ pathname: '/auth/login' }} />
    )} />;
  }

  return <Route {...rest} component={Component} />;
};

MyRoutes.propTypes = {
  component: Proptypes.func.isRequired,
  type: Proptypes.string,
};

export default MyRoutes;
