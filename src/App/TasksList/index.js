import React from 'react';
import PropTypes from 'prop-types'
import Delete from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import './tasksList.css';

// Fonction permettant l'affichage des tâches une à une, possibilité de
// validation et suppression. Leur état de validation définit leur 
// apparence grisée ou non selon leur state.
// l.17 Celle non valiées sont dabord affichées.
// l.46 Ensuite celles qui le sont.
function TasksList({ tasks, deleteTask, stateTask, editTask }) {
  if (tasks.length === 0)
    return <span>Let's achieve something !</span>;
  return (
    <div >
      {tasks.map((task, index) => {
        let state = task.state;
        if (state)
          return (
            <div key={index} className="Task">
              <Checkbox
                checked={!state}
                onClick={stateTask(index)}
                inputProps={{
                  'aria-label': 'checkbox with default color',
                }}
              />
              <input 
                className={state ? "Message" : "MsgCrossed"}
                value={task.message}
                onChange={editTask(index)}
              />
              <div
                className={state ? "Delete" : "DelCross"}
                onClick={deleteTask(index)}
              >
                <Delete />
              </div>
            </div>
          );
        else
          return null})
      }
      {tasks.map((task, index) => {
        let state = task.state;
        if (!state)
          return (
            <div key={index} className="Task">
            <Checkbox
              className="Case"
              checked={!state}
              onClick={stateTask(index)}
              inputProps={{
                'aria-label': 'checkbox with default color',
              }}
            />
            <div className={state ? "Message" : "MsgCrossed"}>{task.message}</div>
              <div
                className={state ? "Delete" : "DelCross"}
                onClick={deleteTask(index)}
              >
                <Delete />
              </div>
            </div>
          );
        else
          return null})
      }
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