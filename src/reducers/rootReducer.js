const initState = {
  newTask: "",
  tasks: [],
}

const rootReducer = ( state = initState, action ) => {
  if (action.type === "DELETE_TASK") {
    let newTasks = state.tasks;
    newTasks.splice(action.id, 1);
    return {
      ...state,
      tasks: newTasks
    }
  }
  if (action.type === "ADD_TASK") {
    let newTasks = [...state.tasks, action.task];
    return {
      ...state,
      tasks: newTasks
    }
  }
  if (action.type === "HANDLE_CHANGE") {
    let message = action.message;
    return {
      ...state,
      newTask: message
    }
  }
  if (action.type === "EDIT_STATE") {
    return {
      ...state,
      tasks: action.tasks
    }
  }
  if (action.type === "EDIT_TASK") {
    return {
      ...state,
      tasks: action.tasks
    }
  }
  return state;
}

export default rootReducer;