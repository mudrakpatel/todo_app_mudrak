import React, {Component} from 'react';

import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Do meditation"},
      {id: 2, content: "Watch Oggy and the cockroaches"},
      {id: 3, content: "Buy some milk"},
    ],
  }

  deleteTodo = (todoId) => {
    const modifiedTodos = this.state.todos.filter(todo => {
      return todo.id !== todoId;
    });
    this.setState({
      todos: modifiedTodos,
    });
  };

  render(){
    const {todos} = this.state;
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
