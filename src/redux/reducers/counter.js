
const initialState = 0;

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'increment-counter':
            return ++state;
        default:
            return state;
    }
}

export default counter;