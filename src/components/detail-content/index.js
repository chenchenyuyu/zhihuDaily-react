import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CYComponent from 'components/base/index';
import './style.less';

import AddTodo from '../todoList/AddTodo';
import TodoList from '../todoList/TodoList';
import Footer from '../todoList/Footer';
class DetailContent extends CYComponent {
  render() {
    return(
      <div className="detail-main-box">
         <div className="detail-img-box">
           <div className="detail-mask"/>
           <h1 className="detail-title">这是标题</h1>
           <p className="detail-image-source">这是段落</p>
         </div>
      <div>
        <AddTodo
        onAddClick={
          text => dispatch(addTodo(text))
        }
        />
        <TodoList
         todos={visibleTodos}
         onTodoClick={index =>
         dispatch(completeTodo(index))
         }
        />
        <Footer
        filter={visibilityFilter}
        onFilterChange={
          nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
        }
        />
      </div>
      </div>
    );
  }
}

DetailContent.propTypes = {
  visibleTodos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired,
 visibilityFilter: PropTypes.oneOf(
   [
     'SHOW_ALL',
     'SHOW_COMPLETED',
     'SHOW_ACTIVE'
   ]
 ).isRequired
};

function selectTodos(todos, filter) {
  switch(filter){
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装component, 注入到dispatch和state到默认的connect(select)(DetailContent)
export default connect(select)(DetailContent);
