import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    navbar__root: {
        display: 'flex',
        position: "sticky",
        zIndex: 100,
        alignItems: 'center'
    },
    navbar__menuButton: {
        marginRight: theme.spacing(2),
    },
    navbar__title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        marginRight: theme.spacing(2)
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
        marginRight: theme.spacing(2),
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
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    },
    navbar__sideButtonsButton: {
        margin: theme.spacing(0, 1)
    },
}));

function Navbar() {

    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.navbar__root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.navbar__menuButton} color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>

                    <Link href="/" color='inherit' onClick={preventDefault} underline='none'>
                        <Typography className={classes.navbar__title} variant="h6" noWrap>
                            Doctor-Doctor
                        </Typography>
                    </Link>

                    <div className={classes.navbar__search}>
                        <div className={classes.navbar__searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search…" classes={{ root: classes.navbar__inputRoot, input: classes.navbar__inputInput, }} inputProps={{ 'aria-label': 'search' }} />
                    </div>

                    <div className="navbar__sideButtons">
                        <Button color='inherit' size='small' variant='outlined' className={classes.navbar__sideButtonsButton}>Doctors</Button>
                        <Button color='inherit' size='small' variant='outlined' className={classes.navbar__sideButtonsButton}>Patients</Button>
                        <Button color='Secondary' size='small' variant='contained' className={classes.navbar__sideButtonsButton} href="/login">Login / Signup</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
