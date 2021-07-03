import React, { Component } from 'react';
import './todoTemplate.css';
import Form from './form';
import TodoList from './todoList';

class TodoTemplate extends Component {

  render() {
    const todos = this.props.todoData;
    return (
      <div className="todo-template">
        <header className="title">
          <h1>오늘 할 일</h1>
        </header>
        <section className="form-wrapper">
          <Form 
            onAdd={this.props.onAdd}  
          />
        </section>
        <section className="todos-wrapper">
          <TodoList
            todos={todos}
            onClickTodo={this.props.onClickTodo}
            onRemove={this.props.onRemove}
          />
        </section>
      </div>
    );
  }
}

export default TodoTemplate;