import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

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
        return <li onClick={onClick}>Logout</li>;
    }
    return <li><Link to="/signin">Login</Link></li>;
}

export default class Header extends Component {
    render() {
        return (
            <div id="Header">
                <div id="header-container">
                    <div className="Logo">
                        <Link to="/">
                            <img src={require('../../img/logo.png')}></img>
                        </Link>
                    </div>
                    <div id="mainMenu-container">
                        <nav className="MainMenu">
                            <ul>
                                <Link to="/about"><li>About</li></Link>
                                <Link to="/clubs"><li>Clubs</li></Link>
                                <Link to="/projects"><li>Projects</li></Link>
                                <Link to="/event"><li>Event</li></Link>
                                <Link to="/international"><li>International</li></Link>
                                <Link to="/calendar"><li>Calendar</li></Link>
                                <Link to="/contact"><li>Contact</li></Link>
                                <Link to="/donate"><li>Donate</li></Link>
                            </ul>
                        </nav>
                        {/* <Grid container spacing={1}>
                            <Grid container item xs={3} spacing={3}>
                                <Link to="/about">
                                    <div className="menu-item-m">About</div>
                                </Link>
                            </Grid>
                            <Grid container item xs={3} spacing={3}>
                                <Link to="/about">
                                    <div className="menu-item-m">Clubs</div>
                                </Link>
                            </Grid>
                            <Grid container item xs={3} spacing={3}>
                                <Link to="/about">
                                    <div className="menu-item-m">Projects</div>
                                </Link>
                            </Grid>
                            <Grid container item xs={3} spacing={3}>
                                <Link to="/about">
                                    <div className="menu-item-m">Event</div>
                                </Link>
                            </Grid>
                            <Grid container item xs={3} spacing={3}>
                                <Link to="/about">
                                    <div className="menu-item-m">Calendar</div>
                                </Link>
                            </Grid>
                            <Grid container item xs={3} spacing={3}>
                                <Link to="/about">
                                    <div className="menu-item-m">Contact</div>
                                </Link>
                            </Grid>
                            <Grid container item xs={3} spacing={3}>
                                <Link to="/about">
                                    <div className="menu-item-m">Donate</div>
                                </Link>
                            </Grid>
                        </Grid> */}
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
            </div>
        );
    }
}