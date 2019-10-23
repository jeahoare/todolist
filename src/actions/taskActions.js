export const deleteTask = id => {
  return {
    type: "DELETE_TASK",
    id: id
  }
}

export const addTask = task => {
  return {
    type: "ADD_TASK",
    task: task
  }
}

export const handleChange = message => {
  return {
    type: "HANDLE_CHANGE",
    message: message
  }
}

export const stateTask = (tasks) => {
  return {
    type: "EDIT_STATE",
    tasks: tasks
  }
}

export const editTask = (tasks) => {
  return {
    type: "EDIT_TASK",
    tasks: tasks
  }
}