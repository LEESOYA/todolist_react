import React, { Component } from 'react';
import './app.css';
import TodoTemplate from './components/todoTemplate'

class App extends Component {
  state = {
    todos : [
      {id:1, text: '리액트 소개하기', checked: false},
      {id:2, text: 'jsx 사용하기', checked: true},
      {id:3, text: 'asd', checked: false},
    ]
  }

  addTodos = (_newTodo) => {
    const newTodo = [...this.state.todos, {id:Date.now(),text: _newTodo, checked:false}];
    this.setState({todos:newTodo})
  }

  render() {
    return (
      <TodoTemplate 
        todoData={this.state.todos}
        onAdd={this.addTodos}
      />
    );
  }
}

export default App;