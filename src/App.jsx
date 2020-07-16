/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Projects from './screens/Projects/Projects';
import Contributions from './screens/Contributions/Contributions';

function App() {
  return (
    <Router>
      <Parallax />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/projects" component={Projects} />
      <Route path="/contributions" component={Contributions} />
      <Footer />
    </Router>
  );
}

export default App;
