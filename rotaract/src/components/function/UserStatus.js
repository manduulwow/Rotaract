import React from 'react';
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
        return <li onClick={onClick}><a>Logout</a></li>;
    }
    return <Link to="/signin"><li>Login</li></Link>;
}

function SettingButtons() {
    return (
        <div className="Settings-Buttons">
            <nav>
                <ul>
                    {/* <li><Link to="/signup">Sign Up</Link></li> */}
                    <Link to="/secret"><li>Enter Data</li></Link>
                    <SignInOut isLoggedIn={false} />
                </ul>
            </nav>
        </div>
    )
}

export default SettingButtons;