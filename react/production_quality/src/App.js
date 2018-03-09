import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList,TodoForm} from './component/todo'

class App extends Component {
  constructor(){
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      todos : [
        {id: 1, name: 'keep on!', isComplete : true},
        {id: 2, name: 'do you want do!', isComplete : false},
        {id: 3, name: 'make great appliction!', isComplete : false},
      ],
      currentTodo:'',
    }
  }

  handleInputChange (event){
    this.setState({
      currentTodo : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-app">
          <TodoForm handleInputChange = {this.handleInputChange} currentTodo = {this.state.currentTodo} />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
