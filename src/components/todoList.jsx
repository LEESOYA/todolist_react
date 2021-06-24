import React, { Component } from 'react';
import './todoList.css'

class Todolist extends Component {

  handleClick = () => {
  }
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(item => 
          {if(item.checked === false) {
            return (
              <li 
                className="todo-item" 
                key={item.id}
                onClick={this.handleClick}
                >
                <div className="remove-mark">&times;</div>
                <span className="todo-text false">{item.text}</span>
              </li>
            )
          } else if(item.checked === true) {
            return (
              <li 
                className="todo-item" 
                key={item.id}
                onClick={this.handleClick}
                >
                <div className="remove-mark">&times;</div>
                <span className="todo-text true">{item.text}</span>
                <div className="check-mark">&#x2713;</div>
              </li>
            )
          }}
        )}
      </ul>
    );
  }
}

export default Todolist;