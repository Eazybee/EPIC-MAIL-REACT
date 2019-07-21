import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from '../routes/routes';
import MyRoutes from '../routes/myRoute';

import store from '../stores';

const App = () => (
  <Provider store={store}>
    <Router>
      {routes.map((route, index) => <MyRoutes key={index} {...route} />)}
    </Router>
  </Provider>
);

export default App;
