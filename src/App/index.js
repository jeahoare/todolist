import React, { Component } from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import TasksList from './TasksList';
import './App.css';

// Application d'une To Do List :
// - Création de tâche
// - Validation de tâche
// - Suppression de tâche
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: [],
    }
  }
  // Méthode permettant de mettre à jour l'attribut de NewTask de l'input
  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };
  // Méthode ajoutant une tâche à la liste si elle n'est pas vide
  handleSubmit = event => {
    if (this.state.newTask.trim().length > 0) {
      let tasksTmp = this.state.tasks;
      tasksTmp.push({
        message: this.state.newTask,
        state: true,
      });
      this.setState({tasks: tasksTmp});
      event.preventDefault();
    }
  };
  // Méthode supprimant la tâche associée
  deleteTask = index => event => {
    let tasksTmp = this.state.tasks;
    tasksTmp.splice(index, 1);
    this.setState({tasks: tasksTmp});
    event.preventDefault();
  }
  // Méthode qui permet de modifier le contenue
  // d'une tâche de la liste lorsqu'elle est cliquée
  editTask = index => event => {
    let tasksTmp = this.state.tasks;
    tasksTmp[index].message = event.target.value;
    this.setState({tasks: tasksTmp});
    event.preventDefault();  
  }
  // Méthode permettant de change l'état d'une tâche entre validée ou non
  // Son apparence change en fonction. 
  stateTask = index => event => {
    let tasksTmp = this.state.tasks
    tasksTmp[index].state = tasksTmp[index].state ? false : true;
    this.setState({tasks: tasksTmp});
    event.preventDefault();
  }
  render () {
    const { task, tasks } = this.state;
    return (
      <div className="App">
        <div className="ToDoList">
          <Header />
          <TaskInput 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            task={task}
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