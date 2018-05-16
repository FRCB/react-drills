import React, { Component } from 'react';


// NewTask should be responsible for adding a new task to a task array on the App component
export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
        this.enterTask = this.enterTask.bind(this)
        this.addTaskOnClick = this.addTaskOnClick.bind(this)
    }

    enterTask(e) {
        this.setState({ input: e.target.value })
    }

    addTaskOnClick() {
        this.props.add(this.state.input);
        this.setState({ input: '' });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.input}
                    placeholder="Enter new task"
                    onChange={this.enterTask}
                />
                <button
                    onClick={this.addTaskOnClick}>
                    Add
                </button>
            </div >
        )
    }
}