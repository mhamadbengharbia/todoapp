import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import './style.css'
const AddTask = ({ dispatch }) => {
    let input

    return (
<div className="container">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch (addTask(input.value) )
                input.value = '' 
            }}>
                 <div className="input-group-append">
                <input ref={task => input = task}  placeholder="Whats your next task?"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />


               <button type="submit" className="btn btn-outline-secondary">Add Task</button>
                </div>  
            </form>
        </div>
    
    
    
    )
}

export default connect()(AddTask)