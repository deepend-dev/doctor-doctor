import React, { useState } from 'react';
import { makeStyles, Card, CardContent, Divider, Typography, Grid, TextField, Button } from '@material-ui/core';

import illustrative from '../../assets/undraw_doctor_kw5l.svg';
import { auth } from '../../config/firebaseConfig';
import { toast } from 'react-toastify';
import { useStateValue } from '../../config/StateProvider';
import { useHistory } from 'react-router-dom';

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
            width: '780px'
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
    login__media: {
        height: '250px',
        objectFit: 'contain',
        marginRight: '10px',

        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    login__formContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(3),
        }
    },
    login__form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(.5)
    },
    login__formsubmit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login() {

    const css = useStyles();

    const [Loading, setLoading] = useState(false);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const { dispatch } = useStateValue();

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!Email || !Password) {
            toast.error('Please provide required information')
            return
        }

        await auth.signInWithEmailAndPassword(Email, Password)
            .then(async (response) => {

                const { user } = response;
                const idToken = await user.getIdTokenResult();

                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: { email: user.email, token: idToken.token }
                });

                // send info to local mongo db

                // Redirect
                history.push('/');

                // throw success toast
                toast.success('User Logged in!');

            })
            .catch((err) => {
                toast.error(err.message)
            })

        setLoading(false)
    };

    return (
        <div className={css.login}>
            <Card className={css.login_Card}>
                <CardContent className={css.login__CardContent}>
                    <img className={css.login__media}
                        src={illustrative}
                        alt="illustrative"
                    />
                    <Divider className={css.login__Divider} orientation="vertical" flexItem />
                    <div className={css.login__formContainer}>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <form className={css.login__form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        disabled={Loading}
                                        type="email"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        autoFocus
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        disabled={Loading}
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={css.login__formsubmit}
                                disabled={!Email || !Password || Loading}
                            >
                                Login
                        </Button>
                        </form>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Login