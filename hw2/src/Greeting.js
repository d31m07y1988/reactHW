import React, { Component } from 'react'


export default class Greeting extends Component {

    render () {
        return (
            <h1 class="ui center aligned header">Hello, {this.props.name}</h1>
        )
    }

}