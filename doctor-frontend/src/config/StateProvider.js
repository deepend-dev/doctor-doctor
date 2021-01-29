import React, { createContext, useContext, useReducer, useEffect } from 'react';

import { auth } from './firebaseConfig';

const initialState = {
    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED_IN_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

const StateContext = createContext();
const useStateValue = () => useContext(StateContext)

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {

            if (user) {
                const idToken = await user.getIdTokenResult();

                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: { email: user.email, token: idToken.token }
                });
            }
            else {

                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: null
                });
            }

            return () => unsubscribe()
        });
    }, []);


    return <StateContext.Provider value={value}>
        {children}
    </StateContext.Provider>
};


export { StateContext, StateProvider, useStateValue }