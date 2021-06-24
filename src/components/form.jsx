import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  state = { 
    value:'',
  }

  handleChange = (e) => {
    this.setState({value:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let todoText = this.state.value;
    todoText && this.props.onAdd(todoText);
    this.setState({value:''})
  }

  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            className="input" 
            onChange={this.handleChange} 
            value={this.state.value}
          />
          <input type="submit" className="add-button" />
      </form>
    );
  }
}

export default Form;