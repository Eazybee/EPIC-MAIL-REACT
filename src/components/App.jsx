import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './landingPage';

const App = () => (
  <Router>
    <Route path="/" exact component={landingPage.Landing} />
  </Router>
);

export default App;
