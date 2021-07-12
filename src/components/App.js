import React from 'react';
import Filter from './Filter';
import AddTask from '../containers/AddTask.js';
import Task from '../containers/Task';
import  './style.css'

const App = () => (
<div className="container">
            <AddTask />
        <Task />
        <Filter />
    </div>
);

export default App;