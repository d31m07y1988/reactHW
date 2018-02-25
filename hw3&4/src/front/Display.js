import React, { Component } from 'react'
import isNumber from "../logic/isNumber";


export class Display extends Component {

    state = {
        text: ''
    }

    onChangeHandler = e => {
        if(e.target.value === '')
            e.target.value = 0
        if(!isNumber(e.target.value))
            error.innerHTML = 'Вы ввели не число. Исправьте, пожалуйста.'
        else
            error.innerHTML = ''
        this.setState({ text: e.target.value })
        this.props.onChangeHandler(e.target.value)
    }

    render () {
        return (
            <div>
                <div>{this.props.val2}{this.props.val3}</div>
                <div><input type="text" value={this.props.val} onChange={this.onChangeHandler}/></div>
            </div>
        )
    }

}