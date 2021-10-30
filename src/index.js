import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList'

ReactDOM.render(
    // JSX语法
    <React.StrictMode>
        <ToDoList/>
    </React.StrictMode>,
    document.getElementById('root')
);
