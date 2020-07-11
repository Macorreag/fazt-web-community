import React from 'react';
import './App.css';
import './fonts/fonts.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import ListContributor from './components/ListContributor/ListContributor';

function App() {
  return (
    <div>
      <Navigation />
      <ListContributor />
    </div>
  );
}

export default App;
