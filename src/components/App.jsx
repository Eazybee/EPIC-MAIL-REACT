import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './landingPage';
import AuthPage from './authPage/index.jsx';
import DashBoard from './dashboard/index.jsx';

const App = () => (
  <Router>
    <Route path="/" exact component={landingPage.Landing} />
    <Route path="/auth/:id" exact component={AuthPage} />
    <Route path="/auth" exact component={AuthPage} />
    <Route path="/dashboard/:id" exact component={DashBoard} />
    <Route path="/dashboard/:id/:id2" exact component={DashBoard} />
    <Route path="/dashboard" exact component={DashBoard} />
  </Router>
);

export default App;
