import { connect } from 'react-redux'
import { VisibilityFilters,toggleTask } from '../actions'
import ListTask from '../components/ListTask'
 
const getVisibleTask = ( Task, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return Task
        case VisibilityFilters.SHOW_COMPLETED:
            return Task.filter(t => t.isDone)
        case VisibilityFilters.SHOW_ACTIVE:
            return Task.filter(t => !t.isDone)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTask(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTask: id => dispatch(toggleTask(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTask)