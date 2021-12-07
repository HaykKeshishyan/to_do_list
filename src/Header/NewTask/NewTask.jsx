import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import s from './NewTask.module.css'
import {addTaskActionCreator, onTextChangeActionCreator} from './../../Redux/HeaderReducer'



const NewTask = (props) => {

    let newTextElement = React.useRef(null);

    let addTask = () => {
        props.dispatch(addTaskActionCreator())
        newTextElement.current.value = '';
    }

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.dispatch(onTextChangeActionCreator(text));
    }

    return (
        <div className={s.newtask}>
            <div>
                <div className="textArea">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                inputRef={newTextElement}
                                onChange={onTextChange}
                                value={props.newText}
                                id="outlined-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                multiline
                            />
                        </div>
                    </Box>
                    <Button variant="contained" color="success" onClick={addTask}>Add task</Button>
                </div>
            </div>
        </div>
    );
}

export default NewTask;