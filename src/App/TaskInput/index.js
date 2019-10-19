import React from 'react';
import PropTypes from 'prop-types'
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import './TaskInput.css';

// Fonction affichant la commande d'entrée de texte pour les tâches
// Avec son bouton de validation
// - L'attribut error ligne 19 de l'input permet le soulignement en rouge
function TaskInput({ handleChange, handleSubmit, newTask }) {
  return (
    <div className="Form">
      <Input
        placeholder="Yeah, time to make your own quests"
        onChange={handleChange('newTask')}
        value={newTask}
        className="Input"
        error
      />
      <IconButton onClick={handleSubmit}>
        <PlaylistAdd className="Button" />
      </IconButton>
    </div>
  );
}

TaskInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTask: PropTypes.string,
};

export default TaskInput;