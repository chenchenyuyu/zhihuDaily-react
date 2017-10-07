import React, { PropTypes } from 'react';
import CYComponent from '../base/index';
import Todo from './Todo';

class TodoList extends CYComponent {
   render() {
     return (
       <ul>
         {
           this.props.todos.map((todo, index) =>
             <Todo
               {...todo}
               key={index}
               onClick={() => this.props.onTodoClick(index)}
             />
           )
         }
       </ul>
     );
   }
}

TodoList.propTypes = {
   onTodoClick: PropTypes.func.isRequired,
   todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export default TodoList;
