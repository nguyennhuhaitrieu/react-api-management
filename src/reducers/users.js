import * as Types from './../constants/ActionTypes';
var initialState = [
    {
        email: '',
        password: ''
    }
];

const users = (state = initialState, action) => {
    //console.log(action);
    switch(action.type) {
        case Types.FETCH_USERS:
            state = action.users;
            return [...state];
        case Types.LOGIN:
            state = action.user;
            return state;
        default: return [...state];
    }
};

export default users;