let nextid = 0;

export const addTask = description => ({
    type: 'ADD_TASK',
    id: nextid++,
    description
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTask = id => ({
    type: 'TOGGLE_TASK',
    id
});
export const EditTask = id => ({
    type: 'EDIT_TASK',
    id
});

export const VisibilityFilters = {
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL'
};
