import React, { Component } from 'react'
import Grid from './Grid'
import OptionsColumn from './OptionsColumn'
import Cell from './Cell';
import ButtonsContainer from './ButtonsContainer';

export class GridContainer extends Component {
    state = {
        size: [10, 10],
        grid: [],
        type: ""
    }


    handleRowChange = (e) => {
        var actualSize = this.state.size;

        if (e.target.value < 25)
            actualSize[1] = e.target.value;
        else
            actualSize[1] = 25;

        this.setState({
            size: actualSize,
        });

        this.createBoard();
    }

    handleColumnChange = (e) => {
        var actualSize = this.state.size;
        if (e.target.value < 25)
            actualSize[0] = e.target.value;
        else
            actualSize[0] = 25;

        this.setState({
            size: actualSize,
        });

        this.createBoard();
    }

    handleButtonClick = (props) => {
        console.log(props)
        this.setState({type: props.name})
    }

    handleCellClick = (props) => {
        console.log(props)
        let gridCopy = this.state.grid
        // gridCopy[props.x][props.y].clicked = !gridCopy[props.x][props.y].clicked
        gridCopy[props.x][props.y].type = this.state.type
        this.setState({grid: gridCopy})
    }

    renderBoard = () => {
        var newGrid = [];
        var cellRow = [];

        for (var i = 0; i < this.state.grid.length; i++) {
            for (var j = 0; j < this.state.grid[i].length; j++) {
                cellRow.push(<Cell key={[i, j]} x={i} y={j} handleClick={this.handleCellClick} type={this.state.grid[i][j].type}/>);
            }
            newGrid.push(<div className="column" key={i}>{cellRow}</div>);
            cellRow = [];
        }
        return newGrid;
    }



    createBoard = () => {
        var newGrid = [];
        var cellColumn = [];

        for (var i = 0; i < this.state.size[0]; i++) {
            for (var j = 0; j < this.state.size[1]; j++) {
                cellColumn.push({x: i, y: j, clicked: false, type:""});
            }
            newGrid.push([...cellColumn]);
            cellColumn = [];
        }
        this.setState({grid: newGrid})
    }

    componentDidMount = () => {
        this.createBoard()
    }

    render() {
        return (
            <div>
                <h1>Welcome to DevelopeRPG {this.props.name}!</h1>
                <ButtonsContainer handleClick={this.handleButtonClick}/>
                <Grid renderBoard={this.renderBoard} size={this.state.size} />
                <OptionsColumn rows={this.state.size[1]} cols={this.state.size[0]} rowChange={this.handleRowChange} colChange={this.handleColumnChange} />
            </div>
        )
    }
}

export default GridContainer
