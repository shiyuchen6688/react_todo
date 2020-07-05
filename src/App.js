import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTask from './components/AddTask';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'CPSC320 set up',
        completed: false
      },
      {
        id: 3,
        title: 'Coop interview',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    // console.log(this);
  }

  handleDeleteTask = (id) => {
    this.setState(
      { todos: this.state.todos.filter(todo => todo.id !== id) }
    );
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <Header />
          <AddTask />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            handleDeleteTask={this.handleDeleteTask} />
        </div>
      </div >
    );
  }
}

export default App;
