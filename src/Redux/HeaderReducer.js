const ADD_TASK_ACTION_CREATOR = 'ADD-TASK'
const ON_TEXT_CHANGE_ACTION_CREATOR = 'UPDATE-NEW-TEXT'

export const headerReducer = (state, action) => {
    if (action.type === 'ADD-TASK') {
        let newTask = {
            id: state.tasksData.length + 1,
            text: state.newText
        };
        state.tasksData.push(newTask);
        state.newText = '';
    } else if (action.type === 'UPDATE-NEW-TEXT') {
        state.newText = action.newText;
    }
    
    return state
}

export const addTaskActionCreator = () => ({type: ADD_TASK_ACTION_CREATOR})

export const onTextChangeActionCreator = (text) => ({type: ON_TEXT_CHANGE_ACTION_CREATOR, newText: text})