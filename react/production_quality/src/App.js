import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './component/todo/todoForm'

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
          <div className="Todo-App">
            <ul>
              {this.state.todos.map(todo=>
              <li key={todo.id}>
               <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
              </li>)}
            </ul>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
