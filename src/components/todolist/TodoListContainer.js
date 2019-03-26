import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNewTodo, deleteThisTodo, deleteAllTodos } from '../../actions/todos';
// import './TodoListContainerStyles.css';
import TodoList from './TodoList';

class TodoListContainer extends PureComponent {

  addTodo = (todo) => {
    this.props.addNewTodo(todo);
  }

  deleteTodo = (index) => {
    this.props.deleteThisTodo(index);
  }

  deleteTodos = () => {
    this.props.deleteAllTodos();
  }

  render() {
    return (
      <div>
        <TodoList addTodo={this.addTodo} todosList={this.props.todos} deleteTodo={this.deleteTodo} deleteAllTodos={this.deleteTodos}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addNewTodo, deleteThisTodo, deleteAllTodos })(TodoListContainer);