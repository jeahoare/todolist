import React, { Component } from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import TasksList from './TasksList';
import './App.css';

// Application d'une To Do List (Création/Validation/Suppression) de tâche
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: [],
    }
  }
  addTask = task => {
    let tasksTmp = [...this.state.tasks, task];
    this.setState({tasks: tasksTmp});
  };
  deleteTask = index => {
    let tasksTmp = this.state.tasks;
    tasksTmp.splice(index, 1);
    this.setState({tasks: tasksTmp});
  }
  editTask = (index, event) => {
    let tasksTmp = this.state.tasks;
    tasksTmp[index].message = event.target.value;
    this.setState({tasks: tasksTmp});
  }
  // Méthode permettant de changer l'état d'une tâche entre validée ou non
  stateTask = index => {
    let tasksTmp = this.state.tasks
    tasksTmp[index].state = tasksTmp[index].state ? false : true;
    this.setState({tasks: tasksTmp});
  }
  render () {
    const { tasks } = this.state;
    return (
      <div className="App">
        <div className="ToDoList">
          <Header />
          <TaskInput 
            addTask={this.addTask}
          />
          <TasksList
            tasks={tasks}
            deleteTask={this.deleteTask}
            stateTask={this.stateTask}
            editTask={this.editTask}
          />
        </div> 
      </div>
    )  
  }
}

export default App;