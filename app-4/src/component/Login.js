import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            passwordInput: ''
        }

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    handleUsername(e) {
        this.setState({ userInput: e.target.value })
    }

    handlePassword(e) {
        this.setState({ passwordInput: e.target.value })
    }

    handleClick() {
        alert(`Username: ${this.state.userInput} Password: ${this.state.passwordInput}`);
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Your username here"
                    onChange={this.handleUsername} />
                <input
                    type="text"
                    placeholder="Your password here"
                    onChange={this.handlePassword} />
                <button
                    onClick={this.handleClick} >
                    Login
                </button>
            </div>
        )
    }
}