import React, { Component } from 'react'

export default class Grid extends Component {

  

  render() {
    return (
      <div>
        <div className="boardContainer">
        {this.props.renderBoard()}
        </div>
      </div>
    );
  }
}

