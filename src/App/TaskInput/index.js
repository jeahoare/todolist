import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { addTask, handleChange } from "../../actions/taskActions";
import './TaskInput.css';

// Fonction affichant la commande d'entrée de texte pour les tâches

class TaskInput extends Component {
  handleChange = e => {
    this.props.handleChange(e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.newTask.trim().length > 0)
      this.props.addTask({message: this.props.newTask, state: true});
  }
  render () {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <Input
          placeholder="Yeah, time to make your own quests"
          onChange={this.handleChange}
          value={this.props.newTask}
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
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    newTask: state.newTask
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => {
      dispatch(addTask(task));
    },
    handleChange: message => {
      dispatch(handleChange(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);