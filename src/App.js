import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import TodoListContainer from './components/todolist/TodoListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Route path="/" exact component={TodoListContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;