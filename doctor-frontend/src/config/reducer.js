export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
    UNSET_USER: "UNSET_USER"
};

export const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.UNSET_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};