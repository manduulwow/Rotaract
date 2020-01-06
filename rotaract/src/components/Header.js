import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
    return <li><Link to="/login">Login</Link></li>;
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
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/clubs">Clubs</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/event">Event</Link></li>
                                <li><Link to="/international">International</Link></li>
                                <li><Link to="/calendar">Calendar</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/donate">Donate</Link></li>
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
            </div>
        );
    }
}