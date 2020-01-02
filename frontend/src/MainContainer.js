import React, { Component } from 'react'
import GridContainer from './GridContainer'
import Login from './Login'

export class MainContainer extends Component {

    state = {
        value: "",
        loggedIn: false
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({value: e.target.value});
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        alert('A name was submitted: ' + this.state.value);
        this.setState({loggedIn: !this.state.loggedIn})
    }

    render() {
        return (
            <div>
                
                {!this.state.loggedIn ? <Login value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> :
                <GridContainer name={this.state.value} />}
            </div>
        )
    }
}

export default MainContainer


