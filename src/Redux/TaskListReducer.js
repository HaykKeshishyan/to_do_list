const CLEAR_TASKS = 'CLEAR-TASKS'
const REMOVE_TASK = 'REMOVE-TASK'
const DONE_TASK = 'DONE-TASK'

export const taskListReducer = (state, action) => {
    if (action.type === 'REMOVE-TASK') {
        let arr = state.tasks.tasksData
        let index = arr.findIndex(i => i.id === action.taskID)
        state.tasks.tasksData.splice(index, 1)
    } else if (action.type === 'CLEAR-TASKS') {
        state.tasks.tasksData = [];
    } else if (action.type === 'DONE-TASK') {
        let arr = state.tasks.tasksData
        let index = arr.findIndex(i => i.id === action.taskID)
        let doneTask = {
            id: state.done.doneData.length + 1,
            text: state.tasks.tasksData[index].text
        }
        state.tasks.tasksData.splice(index, 1)
        state.done.doneData.push(doneTask);
    }

    return state
}

export const clearTaskActionCreator = () => ({ type: CLEAR_TASKS })

export const removeActionCreator = (id) => ({type: REMOVE_TASK, taskID: id})

export const doneActionCreator = (id) => ({type: DONE_TASK, taskID: id})