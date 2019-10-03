import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { toUnicode } from 'punycode';
import { thisTypeAnnotation } from '@babel/types';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Fly on a Jetpack',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Colonize Mars',
          id: Date.now(),
          completed: false
        }
      ],
      todo: '' 
    };
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });


  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  
  addTodo = e => {
    e.preventDefault();
    const newTodo = { 
      task: this.state.todo, 
      completed: false, 
      id: Date.now() 
    };

    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  render() {
    return (
      <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList
        handleToggleComplete={this.toggleTodoComplete}
        todos={this.state.todos}
      />
      <TodoForm
        value={this.state.todo}
        handleTodoChange={this.changeTodo}
        handleAddTodo={this.addTodo}
        handleClearTodos={this.clearCompletedTodos}
      />
    </div>
    );
  }
}

export default App;
