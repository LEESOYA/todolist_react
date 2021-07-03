import React, { Component } from 'react';
import './todoList.css'

class Todolist extends Component {
  render() {
    return (
      <ul className="todo-list">
        {
          this.props.todos.map(item => (
            <li 
              className="todo-item" 
              key={item.id}
              onClick={() => { this.props.onClickTodo(item.id) }}
            >
              <div 
                className="remove-mark"
                onClick={(e) => { this.props.onRemove(e,item.id) }}
                >
                  &times;
              </div>
              <span 
                className={`todo-text ${item.checked ? 'todo-complete' : ''}`} 
                data-id={item.id}
              >
                {item.text}
              </span>
              {item.checked && (<div className="check-mark">&#x2713;</div>)}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Todolist;
