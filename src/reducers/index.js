import { combineReducers } from 'redux'
 import visibilityFilter from './visibilityFilter'
 
 const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    description: action.description,
                    isDone: false
                }
            ];
        case 'TOGGLE_TASK':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, isDone: !todo.isDone}
                    : todo
            );
            case 'EDIT_TASK':
                return state.map((edit)=> {
                    if( edit.id === action.payload.id ) {
                      return (action.payload)
                    } else {
                      return edit;
                    }
                  });
               
        default:
            return state
    }
};

 

export default combineReducers({
    todos,
    visibilityFilter
})


