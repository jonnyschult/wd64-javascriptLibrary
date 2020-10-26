import React from 'react';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import FunctionalComponentDemo from './components/concepts/FunctionalComponentsDemo';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
