import React, { Component } from 'react';
import './App.css';

import HappySad from "./js/components/happySad";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">How Are You Feeling?</h1>
        </header>

        <HappySad/>
      </div>
    );
  }
}

export default App;
