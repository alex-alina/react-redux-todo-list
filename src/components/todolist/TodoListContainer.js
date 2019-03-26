import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNewTodo, deleteThisTodo, deleteAllTodos, toggleTodo } from '../../actions/todos';
// import './TodoListContainerStyles.css';
import TodoList from './TodoList';

class TodoListContainer extends PureComponent {

  addTodo = (todo, done) => {
    this.props.addNewTodo(todo, done);
  }

  deleteTodo = (index) => {
    this.props.deleteThisTodo(index);
  }

  deleteTodos = () => {
    this.props.deleteAllTodos();
  }

  toggleTodo = (index) => {
    this.props.toggleTodo(index);
  }

  render() {
    return (
      <div>
        <TodoList 
          addTodo={this.addTodo} 
          todosList={this.props.todos} 
          deleteTodo={this.deleteTodo} 
          deleteAllTodos={this.deleteTodos}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addNewTodo, deleteThisTodo, deleteAllTodos, toggleTodo })(TodoListContainer);