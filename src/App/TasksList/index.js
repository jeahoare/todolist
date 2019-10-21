import React from 'react';
import PropTypes from 'prop-types'
import Delete from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import './tasksList.css';

/* Apparence du message si la tâche est validée  */
/* Permet de modifier les composants material-ui */
const useStyles = makeStyles({
  root: {
    color: '#80808026',
    alignSelf: 'center',
    textAlign: 'justify',
    overflow: 'auto',
    flexGrow: '1',
    marginLeft: '10px',
    textDecoration: 'line-through',
  },
});

// Fonction permettant l'affichage des tâches une à une, possibilité de
// validation et suppression. Leur état de validation définit leur 
// apparence barée ou non selon leur state.

function TasksList({ tasks, deleteTask, stateTask, editTask }) {
  const classes = useStyles();
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
              className={state ? "Message" : classes.root}
              value={task.message}
              onChange={(e) => editTask(index, e)}
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