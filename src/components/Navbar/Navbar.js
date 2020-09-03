import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <AppBar position="static" className={classes.NavBar}>
            <Toolbar variant="dense">
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    International Space Station Tracker
        </Typography>
            </Toolbar>
        </AppBar >
    );
}

export default Navbar;