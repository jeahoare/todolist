import React from 'react';
import PropTypes from 'prop-types'
import Delete from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import './tasksList.css';


// Fonction permettant l'affichage des tâches une à une, possibilité de
// validation et suppression. Leur état de validation définit leur 
// apparence barée ou non selon leur state.

function TasksList({ tasks, deleteTask, stateTask, editTask }) {
  const printTaskByState = ( bool ) => {
    return tasks.map((task, index) => {
      let state = task.state;
      return (state === bool) ?
          (<div key={index} className="Task">
            <Checkbox
              checked={!state}
              onClick={() => stateTask(index)}
              inputProps={{'aria-label': 'checkbox with default color'}}
            />
            <Input 
              className={state ? "Message" : "MsgCrossed"}
              value={task.message}
              onChange={() => editTask(index)}
              multiline
              disableUnderline
            />
            <div
              className={state ? "Delete" : "DelCross"}
              onClick={() => deleteTask(index)}
            >
              <Delete />
            </div>
          </div>) : null;
      })
  }
  if (tasks.length === 0)
    return <span>Let's achieve something !</span>;
  return (
    <div>
      {printTaskByState(true)}
      {printTaskByState(false)}
    </div>
  );
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

export default TasksList;