import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNewTodo, deleteThisTodo } from '../../actions/todos';
// import './TodoListContainerStyles.css';
import TodoList from './TodoList';

class TodoListContainer extends PureComponent {

  addTodo = (todo) => {
    this.props.addNewTodo(todo);
  }

  deleteTodo = (index) => {
    this.props.deleteThisTodo(index);
  }

  render() {
    return (
      <div>
        <TodoList addTodo={this.addTodo} todosList={this.props.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addNewTodo, deleteThisTodo })(TodoListContainer);