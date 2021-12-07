import './App.css';
import React from 'react';
import TaskList from './TaskList/TaskList';
import DoneList from './DoneList/DoneList';
import Header from './Header/Header';
import { Route, Routes, } from 'react-router-dom';

let App = (props) => {
  return (
      <div className="app-wrapper">
        <Header
          dispatch={props.dispatch} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/tasklist"
              element={
              <TaskList
                tasksData={props.state.tasks.tasksData}
                dispatch={props.dispatch} />
                 } />
             <Route path="/donelist"
               element={
               <DoneList
                doneData={props.state.done.doneData} />
                } />
           </Routes> 
        </div>
      </div>);
}

export default App;
