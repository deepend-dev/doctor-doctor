import React from 'react'
import { makeStyles, Card, CardContent } from '@material-ui/core';
import firebase from 'firebase';
import firebaseui from 'react-firebaseui';

// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// var uiConfig = {
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         // User successfully signed in.
//         // Return type determines whether we continue the redirect automatically
//         // or whether we leave that to developer to handle.
//         return true;
//       },
//       uiShown: function() {
//         // The widget is rendered.
//         // Hide the loader.
//         document.getElementById('loader').style.display = 'none';
//       }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
// };

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

    return (
        <div className={classes.login}>
            <Card className={classes.login_Card}>
                <CardContent>
                    Login
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
