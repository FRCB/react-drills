import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsername(e) {
        this.setState({ username: e.target.value })
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    handleLogin() {
        alert('Username: ${this.state.username} Password: ${this.state.password}')
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.handleUsername}
                    type="text"
                />
                <input
                    onChange={this.handlePassword}
                    type="text"
                />
                <button
                    onClick={this.handleLogin} >
                    Login
            </button>
            </div>
        )
    }
}