import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { toast } from 'react-toastify';

import { auth } from '../../config/firebaseConfig'
import { useStyles, Copyright } from './registerStyles'

const Register = () => {

    // check for valid email needed !!

    const [Loading, setLoading] = useState(false)
    const [Email, setEmail] = useState('')

    const css = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const config = {
            url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
            handleCodeInApp: true
        }

        await auth.sendSignInLinkToEmail(Email, config)
            .then((result) => {
                // show toast notification to user
                console.log(result)
                toast.success(`Confirmation email sent to ${Email}`)
                window.localStorage.setItem('emailForRegistration', Email)
            })
            .catch((err) => {
                toast.error('Encountered Error!!')
                console.log(err)
            })

        // clear state
        setEmail('')
        setLoading(false)
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={css.paper}>
                <Avatar className={css.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
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
                                disabled={Loading}
                                type="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
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

export default Register
