import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../../actions/todos';
import './TodoListContainerStyles.css';
import TodoList from './TodoList';

class TodoListContainer extends PureComponent {

  addTodo = (todo) => {
    this.props.addNewTodo(todo);
  }

  render() {
    return (
      <div>
        <TodoList addTodo={this.addTodo} todosList={this.props.todos}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addNewTodo })(TodoListContainer);