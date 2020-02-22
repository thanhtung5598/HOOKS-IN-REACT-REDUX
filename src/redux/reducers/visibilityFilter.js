import * as types from "./../constanst/actionTypes";
import { VISIBILITY_FILTERS } from '../constanst/visibilityFilter';

const initialState = VISIBILITY_FILTERS.ALL; // default all

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;
