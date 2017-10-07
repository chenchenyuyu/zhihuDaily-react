import React, { PropTypes } from 'react';
import CYComponent from '../base/index';

class Todo extends CYComponent {
  render() {
    return(
      <li onClick={this.props.onClick}>
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
      }}
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;
