import React from 'react';
import d from './Done.module.css'

const Done = (props) => {
    return (
        <div  className={d.done}>
            <label>
                {props.text}
            </label>
        </div>
    );
}

export default Done;