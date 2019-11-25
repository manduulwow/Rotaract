import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const userNameOnChange = (event) => {setUsername(event.target.value)}
    const passWordOnChange = (event) => {setPassword(event.target.value)} 
    const onSubmit = (event) => {
        event.preventDefault()
        fetch('api/authenticate ',{
            method: 'POST',
            body: JSON.stringify({ username:username, password:password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status === 200) {
                dispatch({type:'SIGNIN'})
                props.history.push('/')
            } else {
                const error = new Error(res.errror)
                throw error
            }
        }).catch(err => {
            console.log(err)
            alert('Error logging in please try again')
        })
    }

    return (
        <div className="Login-form">
            <form onSubmit={onSubmit} className="Login">
                <h1>Login Below! haha {props.isLogged}</h1>
                <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={userNameOnChange}
                required
                />
                <input
                type="password"
                name="password"
                placeholder ="Enter password"
                value={password}
                onChange={passWordOnChange}
                required
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Login