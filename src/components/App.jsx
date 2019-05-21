import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './landingPage';
import AuthPage from './authPage/index.jsx';

const App = () => (
  <Router>
    <Route path="/" exact component={landingPage.Landing} />
    <Route path="/auth/:id" exact component={AuthPage} />
    <Route path="/auth" exact component={AuthPage} />
  </Router>
);

export default App;
