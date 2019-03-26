import React, { PureComponent } from 'react';
import './TodoListStyles.css';

class TodoList extends PureComponent {
  state = {}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: "",
    });
  }

  handleDelete = (index) => {
    this.props.deleteTodo(index);
  }

  handleDeleteAll = () => {
    this.props.deleteAllTodos();
  }

  render() {
    return (
      <div className="todo-container">
        <h2 className="title">To Do List</h2>
        <div className="add-todo">
          <input
            type="text"
            name="todo"
            value={this.state.todo || ""}
            placeholder="Add new to do"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <button onClick={this.handleAddTodo}>
            Add
          </button>
          <div className="todo-list-container">
            <ul className="todo-list">
              {/* add map to render lis */}
              {this.props.todosList.map((todo, index) =>
                <li key={index} className="list-item">
                  <input type="checkbox" />
                  <p className="todo-text">{todo}</p>
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div>
            <button onClick={this.handleDeleteAll}>
              Delete All Todos
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;