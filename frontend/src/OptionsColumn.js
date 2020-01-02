import React, { Component } from 'react'

export class OptionsColumn extends Component {
    render() {
        return (
            <div className="headerInnerContainer">
            <label className="label">
              Rows:
              <input className="input" type="text" value={this.props.rows} onChange={this.props.rowChange} />
            </label>
            <label className="label">
              Columns:
              <input className="input" type="text" value={this.props.cols} onChange={this.props.colChange} />
            </label>
            </div>
        )
    }
}

export default OptionsColumn
