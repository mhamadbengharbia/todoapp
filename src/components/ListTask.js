import React  from 'react'
    

     
 

 


const Task = ({ onClick, isDone, description ,EditTask }) => (
 
    <li
        onClick={onClick}
        style={{
            textDecoration: isDone ? 'line-through' : 'none',
            color:'white'

        }}
    >
        {description}
        <button 
        onClick="EditTask"
        style={{
            marginLeft: '10px',
            marginTop:'10px',
            backgroundColor: 'transparent',
            borderColor:'white'
        }}>Edit</button>
    </li>
)
 

const ListTask = ({ todos, toggleTask }) => (
    <ul>
        {todos.map(task =>
            <Task
                key={task.id}
                {...task}
                onClick={() => toggleTask(task.id)}
            />
        )}
    </ul>
);

 
    
 
 

export default ListTask
