import React, { Component } from 'react';
import './app.css';
import TodoTemplate from './components/todoTemplate'

class App extends Component {
  state = {
    todos : [
      {id:1, text: '리액트 소개하기', checked: false, test:123},
      {id:2, text: 'jsx 사용하기', checked: true, test:123},
      {id:3, text: 'asd', checked: false, test:123},
    ]
  }

  addTodos = (newTodo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:Date.now(),
          text: newTodo,
          checked:false
        }
      ]
    });
  }

  clickTodo = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    })
  }

  removeTodo = (e,id) =>  {
    e.stopPropagation();
    const { todos } = this.state;
    const newTodos = todos.filter(item => item.id !== id);
    this.setState({ todos : newTodos });
  }

  render() {
    return (
      <TodoTemplate 
        todoData={this.state.todos}
        onAdd={this.addTodos}
        onClickTodo={this.clickTodo}
        onRemove={this.removeTodo}
      />
    );
  }
}

export default App;