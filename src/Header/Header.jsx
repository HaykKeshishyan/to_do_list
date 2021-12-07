import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import NewTask from './NewTask/NewTask';

let Header = (props) => {
    return (
        <nav className={s.header}>
            <div className={s.navlinks}>
                <div className={s.item} >
                    <NavLink to="/tasklist"
                        activeClassName={s.activeLink}
                        className={s.navlink} >
                        <Button variant="contained">TASKS</Button>
                    </NavLink>
                </div>
                <div className={s.item} >
                    <NavLink to="/donelist"
                        activeClassName={s.activeLink}
                        className={s.navlink} >
                        <Button variant="contained">ALLREADY DONE</Button>
                    </NavLink>
                </div>
            </div>
            <div className="input">
                <NewTask addTask={props.addTask}
                    dispatch={props.dispatch} />
            </div>
        </nav>)
}

export default Header;