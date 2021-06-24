import React, { Component } from 'react';
import './todoTemplate.css';
import Form from './form';
import TodoList from './todoList';

class TodoTemplate extends Component {
  addTodos = (_newTodo) => {
    _newTodo && this.props.onAdd(_newTodo);
  }

  // handleCheck = () => {
  //   // console.log(this.props._todos);
  //   // console.log(this.props.todoData)
  //   // alert('template alert')
  // }

  render() {
    const todos = this.props.todoData;
    return (
      <div className="todo-template">
        <header className="title">
          <h1>오늘 할 일</h1>
        </header>
        <section className="form-wrapper">
          <Form 
            onAdd={this.addTodos}  
          />
        </section>
        <section className="todos-wrapper">
          <TodoList
            todos={todos}
            // onToggle={this.handleCheck}
          />
        </section>
      </div>
    );
  }
}

export default TodoTemplate;