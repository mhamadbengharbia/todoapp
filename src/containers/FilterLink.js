import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
 
 
const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            margin: '10px',
            backgroundColor: 'transparent',
            borderColor:'white'
            

        }}
    >
        {children}
    </button>
);

 

const mapStateToProps = (state, props) => ({
    active: props.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(setVisibilityFilter(props.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);