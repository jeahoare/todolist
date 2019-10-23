import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Delete from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import { deleteTask, stateTask, editTask } from '../../actions/taskActions';
import './tasksList.css';

// Fonction permettant l'affichage des tâches une à une, possibilité de
// validation et suppression. Leur état de validation définit leur 
// apparence grisée ou non selon leur state.
class TasksList extends Component {
  deleteTask = index => {
    this.props.deleteTask(index);
    this.forceUpdate()
  }
  editTask = (index, event) => {
    let tasksTmp = this.props.tasks;
    tasksTmp[index].message = event.target.value;
    this.props.editTask(tasksTmp);
    this.forceUpdate()
  }
  // Méthode permettant de changer l'état d'une tâche entre validée ou non
  stateTask = index => {
    let tasksTmp = this.props.tasks
    tasksTmp[index].state = tasksTmp[index].state ? false : true;
    this.props.stateTask(tasksTmp);
    this.forceUpdate()
  }
  render() {
    const printTaskByState = ( bool ) => {
      return this.props.tasks.map((task, index) => {
        let state = task.state;
        return (state === bool) ?
          (<div key={index} className="Task">
            <Checkbox
              checked={!state}
              onClick={() => this.stateTask(index)}
              inputProps={{'aria-label': 'checkbox with default color'}}
            />
            <Input 
              className={state ? "Message" : "Message"}
              value={task.message}
              onChange={(e) => this.editTask(index, e)}
              multiline
              disableUnderline
              disabled={!state}
            />
            <div
              className={state ? "Delete" : "DelCross"}
              onClick={() => this.deleteTask(index)}
            >
              <Delete />
            </div>
          </div>) : null;
      })
    }
    return (this.props.tasks.length === 0) ?
      (<span>Let's achieve something !</span>)
      : (<div>
        {printTaskByState(true)}
        {printTaskByState(false)}
      </div>);
  }
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      state: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  stateTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => {
      dispatch(deleteTask(id));
    },
    stateTask: tasks => {
      dispatch(stateTask(tasks));
    },
    editTask: tasks => {
      dispatch(editTask(tasks));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);