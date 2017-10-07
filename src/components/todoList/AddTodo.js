import React, { PropTypes } from 'react';
import CYComponent from '../base/index';

class AddTodo extends CYComponent {
  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref='input'/>
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }
}

AddTodo.PropTypes = {
  onAddClick: PropTypes.func.isRequired
};

export default AddTodo;
