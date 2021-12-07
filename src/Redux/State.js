import {headerReducer} from './HeaderReducer'
import {taskListReducer} from './TaskListReducer'
import {doneListReducer} from './DoneListReducer'

let store = {
    _state: {
        tasks: {
            tasksData: [
                { id: 0, text: 'Tesk 0', },
                { id: 1, text: 'Task 1', },
                { id: 2, text: 'Tesk 2', },
                { id: 3, text: 'Tesk 3', },
                { id: 4, text: 'Tesk 4', },
                { id: 5, text: 'Tesk 5', },
                { id: 6, text: 'Tesk 6', },
            ],
            newText: '',
        },
        done: {
            doneData: [
                { id: 0, text: 'Tesk 7', },
                { id: 1, text: 'Tesk 8', },
            ],
        },

    },
    _render() {
        console.log('rendered')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._render = observer;
    },

    dispatch(action) {
        this._state.tasks = headerReducer(this._state.tasks, action);
        this._state = taskListReducer(this._state, action);
        this._state = doneListReducer(this._state, action)

        this._render(this._state);
    },
}

export default store;