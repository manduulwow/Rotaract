import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function SignInOut() {
    const isLoggedIn = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    const onClick = () => {
        fetch('/api/signOut')
            .then(res => {
                if (res.status === 200)
                    dispatch({ type: 'SIGNOUT' })
            })
    }
    if (isLoggedIn) {
        return <li onClick={onClick}><a>Logout</a></li>;
    }
    return <li><Link to="/signin">Login</Link></li>;
}

const Header = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false)
    const [open, setOpen] = useState(false)
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[
                    { text: 'About', link: '/about' }, { text: 'Clubs', link: '/clubs' }, { text: 'Projects', link: '/projects' },
                    { text: 'Event', link: '/emptyComponent' }, { text: 'International', link: '/emptyComponent' }, { text: 'Calendar', link: '/emptyComponent' },
                    { text: 'Contact', link: '/emptyComponent' }, { text: 'Donate', link: '/emptyComponent' }].map((menu, index) => (
                        <Link to={menu.link} key={index}>
                            <ListItem button key={menu.text}>
                                <ListItemText primary={menu.text} />
                            </ListItem>
                        </Link>
                    ))}
            </List>
        </div>
    );

    return (
        <div id="Header">
            <div id="header-container">
                <div className="Logo">
                    <Link to="/">
                        <img src={require('../../img/Logo.svg')}></img>
                    </Link>
                </div>
                <div className="menu-container">
                    <div id="mainMenu-container">
                        <nav className="MainMenu">
                            <ul>
                                <Link to="/about"><li><span>Home</span></li></Link>
                                <Link to="/clubs"><li><span>Clubs</span></li></Link>
                                <Link to="/projects"><li><span>Projects</span></li></Link>
                                {/* <Link to="/emptyComponent"><li>Event</li></Link>
                            <Link to="/emptyComponent"><li>International</li></Link>
                            <Link to="/emptyComponent"><li>Calendar</li></Link>
                            <Link to="/emptyComponent"><li>Contact</li></Link>
                            <Link to="/emptyComponent"><li>Donate</li></Link> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="Settings-Buttons">
                        <nav>
                            <ul>
                                {/* <li><Link to="/signup">Sign Up</Link></li> */}
                                <li><Link to="/secret">Enter Data</Link></li>
                                <SignInOut isLoggedIn={false} />
                            </ul>
                        </nav>
                    </div>
                </div>
                <div id="drawer-btn">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer('top', true)}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={'top'}
                        open={drawer}
                        onClose={toggleDrawer('top', false)}
                        onOpen={toggleDrawer('top', true)}
                    >
                        {list('top')}
                    </SwipeableDrawer>
                </div>
            </div>
        </div>
    )
}

export default Header