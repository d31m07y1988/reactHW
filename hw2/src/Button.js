import React, { Component } from 'react'
import swal from 'sweetalert'


export default class Button extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.myStyle = 'ui button ' + props.color + ' ' + props.size;
    }

    handleClick(e){
        new swal(this.props.alertTitle, this.props.alertText, this.props.alertType);
    }

    render() {
        return <button class = {this.myStyle} onClick={this.handleClick}>{this.props.name}</button>;
    }

}