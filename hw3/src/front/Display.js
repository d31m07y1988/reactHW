import React, { Component } from 'react'


export class Display extends Component {

    state = {
        text: ''
    }

    onChangeHandler = e => {
        this.setState({ text: e.target.value })
        this.props.onChangeHandler(e.target.value)
    }

    render () {
        return (
            <input type="text" value={this.props.val} onChange={this.onChangeHandler}/>
        )
    }

}