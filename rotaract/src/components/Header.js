import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SignInOut() {
    const isLoggedIn = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    const onClick = () => {
        fetch('/api/signOut')
        .then(res => {
            if(res.status === 200) 
                dispatch({type: 'SIGNOUT'})
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
          <div className="Header">
                <div className="Logo">
                    <Link to="/">Logo</Link>
                </div>
                <div className="Settings-Buttons">
                    <nav>
                        <ul>
                            {/* <li><Link to="/signup">Sign Up</Link></li> */}
                            <li><Link to="/secret">Enter Data</Link></li>
                            <SignInOut isLoggedIn={false}/>
                        </ul>
                    </nav>
                </div>
          </div>
        );
    }
}