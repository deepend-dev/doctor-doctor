import React from 'react'
import { Container, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    login: {

    },
    paper: {
        padding: theme.spacing(2),
        flex: '1',
        margin: theme.spacing(1),
        minHeight: 400
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function Login() {

    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.login}>
            <Paper>
                Login
            </Paper>
        </Container>
    )
}

export default Login
