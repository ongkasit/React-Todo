import React from 'react';
import ToDo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import data from './components/TodoComponents/data';
import { toUnicode } from 'punycode';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: data
    }
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleTodo = (event, todoId) => {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
        return todo 
        }
      })
    })
  }

  clearTodo = (event) => {
    event.preventDefault()

    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed 
      })
    })
  }

  render() {
    return (
      <div className= "App">
        <div className= "header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        </div>

        <div className= "todo-list">
          {this.state.todos.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              onClick={(event) => this.toggleTodo(event, todo.id)}
              /> 
          ))}

          <button className="clear-btn" onClick={this.clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

export default App;
