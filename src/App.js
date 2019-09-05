import React, { Component } from 'react';
import './App.css';
import Tickers from './components/Tickers.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Cryptocurrency Ticker</h2>
      </div>
      <Tickers />
    </div>
  );
}

export default App;
