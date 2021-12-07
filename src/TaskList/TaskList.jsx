import { Button } from '@mui/material';
import React from 'react';
import Task from './Task/Task';
import p from './TaskList.module.css';
import {clearTaskActionCreator} from './../Redux/TaskListReducer';



const TaskList = (props) => {
    let tasksElements = props.tasksData.map(task => <Task 
        text={task.text} 
        id={task.id} 
        dispatch={props.dispatch}
        tasksData={props.tasksData}
        />)

    let clearTasks = () => {
        props.dispatch(clearTaskActionCreator());
    }

  return (
    <div className={p.page}>
      <div>
        <div className="allTasks">
            {tasksElements}
        </div>
        <div className={p.button}>
        <Button variant="outlined" size="small" onClick={clearTasks}>Clear Tasks</Button>
        </div>
      </div>
    </div>
  );
}

export default TaskList;