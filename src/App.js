import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>      
    </div>
  );
}

export default App;
