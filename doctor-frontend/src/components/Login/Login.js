import React from 'react';
import { makeStyles, Card, CardContent, Divider } from '@material-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth, providers } from '../../config/firebaseConfig'
import { useStateValue } from '../../config/StateProvider';
import { actionTypes } from '../../config/reducer';
import illustrative from '../../assets/undraw_doctor_kw5l.svg';

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
            height: '400px',
            width: '800px'
        },
    },
    login__CardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }
    },
    login__Divider: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    media: {
        height: '250px',
        objectFit: 'contain',
        marginRight: '10px',
    }
}));

function Login() {

    const css = useStyles();
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            providers.EmailAuthProvider.PROVIDER_ID,
            providers.GoogleAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '/',
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: (authResult) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: authResult.user
                })
            }
        },
    };

    return (
        <div className={css.login}>
            <Card className={css.login_Card}>
                <CardContent className={css.login__CardContent}>
                    <img className={css.media}
                        src={illustrative}
                        alt="illustrative"
                    />
                    <Divider className={css.login__Divider} orientation="vertical" flexItem />
                    <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={auth} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Login