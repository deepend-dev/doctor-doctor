import React, { useEffect, useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core'

import { auth } from '../../config/firebaseConfig';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { useStyles, Copyright } from './registerStyles';
import { useStateValue } from '../../config/StateProvider';

const CompleteRegistration = () => {

    const [Loading, setLoading] = useState(false);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const { state, dispatch } = useStateValue();

    const css = useStyles();
    let history = useHistory();

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'))
    }, [history]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!Email || !Password) {
            toast.error('Please provide required information')
            return
        }

        await auth.signInWithEmailLink(Email, window.location.href)
            .then(async (response) => {
                // console.log(response)
                if (response.user.emailVerified) {

                    const user = auth.currentUser;

                    window.localStorage.removeItem('emailForRegistration');
                    await user.updatePassword(Password);

                    const idToken = await user.getIdTokenResult();

                    dispatch({
                        type: 'LOGGED_IN_USER',
                        payload: { email: user.email, token: idToken.token }
                    });

                    console.log('registration', state)

                    // update local mongo db user

                    // Redirect
                    history.push('/');

                    // throw success toast
                    toast.success('User Added!');
                };


            })
            .catch((err) => {
                toast.error(err.message)
            })

        setLoading(false)
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={css.paper}>
                <Avatar className={css.avatar} />
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={css.form} onSubmit={handleSubmit}>
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
                                disabled
                                type="email"
                                value={Email}
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                disabled={Loading}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                disabled={Loading}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                                disabled={Loading}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={css.submit}
                        disabled={!Email || Loading}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}

export default CompleteRegistration
