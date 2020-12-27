import React from 'react';
import { makeStyles, Card, CardContent, Button } from '@material-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import fireBaseConfig from '../../config/firebaseConfig'
import { useStateValue } from '../../config/StateProvider';
import { actionTypes } from '../../config/reducer'


!firebase.apps.length ? firebase.initializeApp(fireBaseConfig) : firebase.app()

const useStyles = makeStyles((theme) => ({
    login: {
        height: '100vh',
        background: '#f8f8f8',
        display: 'grid',
        placeItems: 'center'
    },
    login_Card: {
        height: '100%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            height: '600px',
            width: '600px',
        },
    }
}));

function Login() {

    const classes = useStyles();
    const [{user}, dispatch] = useStateValue();

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: firebase.auth().isSignInWithEmailLink(window.location.href) ? 'redirect' : 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                signInMethod: firebase.auth.EmailAuthProvider.PROVIDER_ID
            }
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: (authResult) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: authResult.user
                })
            },
        },
    };

    // Listen to the Firebase Auth state and set the local state.
    const signout = () => {
        firebase.auth().signOut();
        dispatch({
            type: actionTypes.SET_USER,
            user: null
        })
    }

    return (
        <div className={classes.login}>
            <Card className={classes.login_Card}>
                <CardContent>
                    <h1>My App</h1>
                    <p>Please sign-in:</p>
                    <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()}  uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
