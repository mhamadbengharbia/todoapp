import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
 import './style.css'
const Filter = () => (
    <div className="btns">
        <FilterLink   filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink    filter={VisibilityFilters.SHOW_ACTIVE}>
        Undone
        </FilterLink>
        <FilterLink  filter={VisibilityFilters.SHOW_COMPLETED}>
         Done
        </FilterLink>
    </div>
)

export default Filter