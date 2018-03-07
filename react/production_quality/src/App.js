import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-app">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              <li><input type="checkbox"/></li>
              <li><input type="checkbox"/></li>
              <li><input type="checkbox"/></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
