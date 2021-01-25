import React, { createContext, useReducer } from 'react';

const initialState = {
    user: null,
};

const actionTypes = {
    LOGGED_IN_USER: "LOGGED_IN_USER",
    UNSET_USER: "UNSET_USER"
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN_USER:
            return {
                ...state,
                user: action.payload
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

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }

    return <StateContext.Provider value={value}>
        {children}
    </StateContext.Provider>
};

export { StateContext, StateProvider }