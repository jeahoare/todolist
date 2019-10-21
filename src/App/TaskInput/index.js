import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import './TaskInput.css';

// Fonction affichant la commande d'entrée de texte pour les tâches

class TaskInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
    }
  }
  handleChange = e => {
    this.setState({message: e.target.value});
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.message.trim().length > 0)
      this.props.addTask({...this.state, state: true});
  }
  render () {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <Input
          placeholder="Yeah, time to make your own quests"
          onChange={this.handleChange}
          value={this.state.newTask}
          className="Input"
          // - L'attribut error permet le soulignement en rouge
          error
          required
          multiline
        />
        <IconButton type="submit">
          <PlaylistAdd className="Button" />
        </IconButton>
      </form>)
  }
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskInput;