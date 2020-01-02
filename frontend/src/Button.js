import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <button onClick={() => {this.props.handleClick(this.props)}}>{this.props.name}</button>
        )
    }
}

export default Button
