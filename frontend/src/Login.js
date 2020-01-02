import React, { Component } from 'react'

export default class Login extends Component {




    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                    <label>
                         Name:
                        <input type="text" value={this.props.value} onChange={(e) => this.props.handleChange(e)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
