import React, { Component } from 'react';
import Todo from './Todo'

// List should be responsible for display the tasks inside of a task array on the App component in a list-like fashion

export default function List(props) {
    let list = props.tasks.map((element, i) => {
        return (
            <div>
                <Todo key={i} task={element} />
            </div>
        )
    })

    return (
        <div>{list}</div>
    )
}

