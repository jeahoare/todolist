import React, { Component } from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import TasksList from './TasksList';
import './App.css';

// Application d'une To Do List (Création/Validation/Suppression) de tâche
class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="ToDoList">
          <Header />
          <TaskInput />
          <TasksList />
        </div> 
      </div>
    )  
  }
}

export default App;