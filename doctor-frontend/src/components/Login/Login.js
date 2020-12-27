import React, { useEffect, useState } from 'react';
import { makeStyles, Card, CardContent, Button } from '@material-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import fireBaseConfig from '../../config/firebaseConfig'


!firebase.apps.length ? firebase.initializeApp(fireBaseConfig) : firebase.app()

// const ui = new firebaseui.auth.AuthUI(firebase.auth());

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
        signInSuccessWithAuthResult: () => false,
    },
};


// ui.start('#firebaseui-auth-container', uiConfig);

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
    const [user, setUser] = useState(null); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const registerAuthObserver = firebase.auth().onAuthStateChanged(returnedUser => {
            setUser(returnedUser);
        });
        return () => registerAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    const signout = () => {
        firebase.auth().signOut();
    }

    console.log(user)

    return (
        <div className={classes.login}>
            <Card className={classes.login_Card}>
                {user ? (
                    <CardContent>
                        <h1>My App</h1>
                        <p>You are logged in as {user.displayName}</p>
                        <Button color='inherit' size='small' variant='outlined' onClick={signout}>Sign Out!</Button>
                    </CardContent>
                ) : (
                        <CardContent>
                            <h1>My App</h1>
                            <p>Please sign-in:</p>
                            <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()}  uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </CardContent>
                    )
                }
            </Card>
        </div>
    )
}

export default Login
