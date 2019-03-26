import React, { PureComponent } from 'react';
// import './TodoListStyles.css';

class TodoList extends PureComponent {
  state = {}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: "",
    });
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
          <button onClick={this.handleTodo}>
            Add
          </button>
          <div className="todo-list-container">
            <ul className="todo-list">
              {/* add map to render lis */}
              {this.props.todosList.map(todo =>
                <li>{todo}</li>
              )}

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;