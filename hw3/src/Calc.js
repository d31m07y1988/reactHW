import React, { Component } from 'react'
import {Display} from "./front/Display";
import {Button} from "./front/Button";
import {answer} from "./logic/answer";
import './style.css'

export class Calc extends Component {

    state = {
        first: null,
        next: null,
        operation: null,
    }

    handleClick = (buttonName) => {
        this.setState(answer(this.state, buttonName));
    }

    updateNext = (val) => {
        this.setState({next: val});
    }

    render() {
        return(
            <div className="calc">
                <div className="display"><Display val={this.state.next || '0'}
                                                  val2={this.state.first}
                                                  val3={this.state.operation}
                                                  onChangeHandler={this.updateNext}/></div>
                <div id="error"/>
                <div className="row">
                    <div><Button name="1" clickHandler={this.handleClick}/></div>
                    <div><Button name="2" clickHandler={this.handleClick}/></div>
                    <div><Button name="3" clickHandler={this.handleClick}/></div>
                    <div><Button name="c" clickHandler={this.handleClick}/></div>
                </div>
                <div className="row">
                    <div><Button name="4" clickHandler={this.handleClick}/></div>
                    <div><Button name="5" clickHandler={this.handleClick}/></div>
                    <div><Button name="6" clickHandler={this.handleClick}/></div>
                    <div><Button name="+" clickHandler={this.handleClick}/></div>
                </div>
                <div className="row">
                    <div><Button name="7" clickHandler={this.handleClick}/></div>
                    <div><Button name="8" clickHandler={this.handleClick}/></div>
                    <div><Button name="9" clickHandler={this.handleClick}/></div>
                    <div><Button name="-" clickHandler={this.handleClick}/></div>
                </div>
                <div className="row">
                    <div><Button name="*" clickHandler={this.handleClick}/></div>
                    <div><Button name="0" clickHandler={this.handleClick}/></div>
                    <div><Button name="/" clickHandler={this.handleClick}/></div>
                    <div><Button name="=" clickHandler={this.handleClick}/></div>
                </div>
            </div>
        )
    }
}