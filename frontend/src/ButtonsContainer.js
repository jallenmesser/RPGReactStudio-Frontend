import React, { Component } from 'react'
import Button from './Button'

export class ButtonsContainer extends Component {
    render() {
        return (
            <div>
                {/* Empty */}
                <Button name={"Blank"} handleClick={this.props.handleClick}/>
                {/* Wall Button */}
                <Button name={"Walls"} handleClick={this.props.handleClick}/>
                {/* NPC Button */}
                <Button name={"NPC"} handleClick={this.props.handleClick}/>
            </div>
        )
    }
}

export default ButtonsContainer

