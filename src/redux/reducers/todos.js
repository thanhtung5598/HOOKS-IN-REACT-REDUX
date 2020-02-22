import * as types from "./../constanst/actionTypes";

const initialState = [
    {
        id: 0,
        content: 'aaa',
        completed: false
    },
    {
        id: 1,
        content: 'BBB',
        completed: true
    }
]

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return [...state, action.data];
        case types.TOGGLE_TODO:
            const { id } = action;
            const index = findIndex(state,id);
            state[index]= {
                ...state[index],
                completed: !state[index].completed
            }
            return [...state];
        default:
            return state;
    }
}

var findIndex = (todos, id) => {
    var result = -1;
    todos.forEach((todo, index) => {
        if (todo.id === id) {
            return result = index;
        }
    });
    return result;
};