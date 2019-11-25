import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor() {
        super();
        //Set default message
        this.state = {
            username: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const {value, name} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        console.log(this.state.username)
        event.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res)
            }
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                UserName:
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
            </label>
            <label>
                Password:
                <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange}/>
            </label>
            <button>Button</button>
        </form>
      );
    }
  }