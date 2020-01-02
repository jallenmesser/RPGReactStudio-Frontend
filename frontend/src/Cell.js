import React, { Component } from 'react'

export default class Cell extends Component {

    // state = {
    //     hasBeenClicked: false
    // }

    // handleClick = () => {
    //     console.log(this.props.x, this.props.y)
    //     this.setState({hasBeenClicked: !this.state.hasBeenClicked}) 

    // }

    fillCell = (type) =>{
        this.props.fillCell(type)
    }

    render() {
        return (
            <div>
                <div onClick={() => this.props.handleClick(this.props)} className={this.props.type ? `cellContainer${this.props.type}` : "cellContainerBlank"}></div>
            </div>
        )
    }
}

