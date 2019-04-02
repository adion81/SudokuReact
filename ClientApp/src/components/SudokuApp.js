import React, { Component } from 'react';
import Timer from './Timer';
import Sudoku from './Sudoku.js';
import NumberSelect from './NumberSelect';
import Modal from './Modal';

import './Sudoku.css';

export class SudokuApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: '',
            unSolvedSquares: 100,
            isPlaying: false,
            selected: {
                row: 0,
                col: 0,
                box: 0,
                square: 0
            },
            numbers: [
                {
                    value: 1,
                    id: 1
                },
                {
                    value: 2,
                    id: 2
                },
                {
                    value: 3,
                    id: 3
                },
                {
                    value: 4,
                    id: 4
                },
                {
                    value: 5,
                    id: 5
                },
                {
                    value: 6,
                    id: 6
                },
                {
                    value: 7,
                    id: 7
                },
                {
                    value: 8,
                    id: 8
                },
                {
                    value: 9,
                    id: 9
                }
            ],
            isGuessing: true,
            guess: 0,
            grid: []
        };
        

        this.baseState = this.state;

    }

    resetGame = () => {
        window.location.reload();
    }
    componentWillMount(){
        fetch('http://localhost:5000/api/sudoku/board')
            .then(response => response.json())
            .then(data => {
                console.log(data.grid);
                
                this.setState({ grid: data.grid})
            });
    }


    handleSelect = (id) => {
        console.log(id);
        let sId = this.state.selected.square;
        console.log(sId);
        let square = this.state.grid.map(g => {
            g.map(cell => {
                if (cell.id === sId) {
                    console.log(cell);
                    if (cell.value === id) {
                        cell.isSolved = true;
                        this.getSolved();
                    }
                }
                return cell;
            })
            return g;
        })
        this.setState({ grid: square });

    }


    highlightSelect = (row, col, box, id) => {
        if (this.state.isPlaying === true) {
            console.log("Row: " + row + ", Column: " + col + ", Box: " + box);
            this.setState(prevState => ({
                selected: {
                    row: row,
                    col: col,
                    box: box,
                    square: id
                }
            }))
        }
    }
    getSolved =() => {
        let unSolved = 0;
        for(var i = 0; i < this.state.grid.length; i++){
            for(var j = 0; j < this.state.grid[i].length; j++){
                if(this.state.grid[i][j].isSolved === false){
                    unSolved += 1;
                }
            }
        }
        if(unSolved === 0){
            this.setState( prevState => ({
                message: prevState.message = 'YOU WIN!!!!',
                
            }))
        }
        this.setState( prevState => ({
            unSolvedSquares: prevState.unSolvedSquares = unSolved
        }))
    }
    startPlaying = () => {
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }))
    }
    render() {

        return (
            <div className="sudoku-body">
                <h1 className="sudoku-h1">Sudoku</h1>
                <main >
                    <Modal 
                        unSolvedSquares={this.state.unSolvedSquares}
                        message={this.state.message}
                        resetGame={this.resetGame}
                    />

                    <Timer
                        startPlaying={this.startPlaying}
                        resetGame={this.resetGame}
                    />

                    <Sudoku
                        grid={this.state.grid}
                        compareNumber={this.compareNumber}
                        highlightSelect={this.highlightSelect}
                        selected={this.state.selected}
                    />
                </main>
                <footer>
                    <NumberSelect
                        numbers={this.state.numbers}
                        getNumber={this.getNumber}
                        handleSelect={this.handleSelect}
                    />
                </footer>
            </div>

        );
    }

}
