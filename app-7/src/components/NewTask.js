import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value })
    }

    handleClick() {
        this.props.add(this.state.userInput)
        this.setState({ userInput: '' })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter new task"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick} >
                    Add
                </button>
            </div >
        )
    }
}
