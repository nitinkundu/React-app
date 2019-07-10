import React from 'react';
import logo from './image2vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A very basic React App
        </p>
        <a>
        Hello World!! Learning React
        </a>
      </header>
    </div>
  );
}

export default App;
