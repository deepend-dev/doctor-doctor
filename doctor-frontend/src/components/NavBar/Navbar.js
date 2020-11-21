import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Menu, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navbar__root: {
        display: 'flex',
        position: "sticky",
        zIndex: 100,
        alignItems: 'center'
    },
    navbar__menuButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    },
    navbar__title: {
        display: 'none',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            margin: theme.spacing(0,2,0,2)
        },
    },
    navbar__search: {
        display: 'flex',
        flex: 2,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: theme.spacing(4),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    navbar__searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbar__inputRoot: {
        color: 'inherit',
    },
    navbar__inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    navbar__sideButtons: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    },
    navbar__sideButtonsButton: {
        marginRight: '10px',
        maxHeight: '30px',
        width: '90px',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    navbar__sideButtonsLoginButton: {
        width: '90px',
        maxHeight: '30px',
    },
}));

function Navbar() {

    const css = useStyles();

    return (
        <div className={css.navbar__root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={css.navbar__menuButton} color="inherit" aria-label="open drawer">
                        <Menu />
                    </IconButton>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography className={css.navbar__title} variant="h6" noWrap>
                            Doctor-Doctor
                        </Typography>
                    </Link>

                    <div className={css.navbar__search}>
                        <div className={css.navbar__searchIcon}>
                            <Search />
                        </div>
                        <InputBase placeholder="Search…" classes={{ root: css.navbar__inputRoot, input: css.navbar__inputInput, }} inputProps={{ 'aria-label': 'search' }} />
                    </div>

                    <div className={css.navbar__sideButtons}>
                        <Button color='inherit' size='small' variant='outlined' className={css.navbar__sideButtonsButton} href="/doctor-login">Doctors</Button>
                        <Button color='inherit' size='small' variant='outlined' className={css.navbar__sideButtonsButton}>Patients</Button>
                        <Button color='secondary' size='small' variant='contained' className={css.navbar__sideButtonsLoginButton} href="/login">Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
