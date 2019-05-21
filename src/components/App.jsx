import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './landingPage';
import AuthPage from './authPage/index.jsx';
import DashBoard from './dashboard/index.jsx';

const App = () => (
  <Router>
    <Route path="/" exact component={landingPage.Landing} />
    <Route path="/auth/:id" component={AuthPage} />
    <Route path="/auth" component={AuthPage} />
    <Route path="/dashboard:id" component={DashBoard} />
    <Route path="/dashboard" component={DashBoard} />
  </Router>
);

export default App;
