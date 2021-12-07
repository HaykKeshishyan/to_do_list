import React from 'react';
import Button from '@mui/material/Button';
import t from './Task.module.css'
import {removeActionCreator, doneActionCreator} from './../../Redux/TaskListReducer'


const Task = (props) => {

    
    let remove = () => {
        let id = props.id
        props.dispatch(removeActionCreator(id))
    }

    let done = () => {
        let id = props.id
        props.dispatch(doneActionCreator(id))
    }

    return (
        <div className={t.task}>
            <span className={t.text}>
                {props.text}
            </span>
            <span className={t.buttons}>
            <Button variant="contained" color="success" onClick={done} >Done</Button>
            <Button variant="outlined" color="error" onClick={remove}>Remove</Button>
            </span>
        </div>
    );
}

export default Task;