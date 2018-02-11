import React, { Component } from 'react'


export class Button extends Component {

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }

    render () {
        return (
            <button type="button" onClick={this.handleClick}>{this.props.name}</button>
        )
    }

}