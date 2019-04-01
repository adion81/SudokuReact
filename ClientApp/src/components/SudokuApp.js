import React, { Component } from 'react';
import Timer from './Timer';
import Sudoku from './Sudoku.js';
import NumberSelect from './NumberSelect';

import './Sudoku.css';

export class SudokuApp extends Component {

    constructor(props) {
        super(props)

        fetch('api/SudokuController/sudoku/board')
            .then(response => response.text())
            .then(data => {
                console.log(data);
            });

        this.state = {
            isPlaying: false,
            selected: {
                row: 0,
                column: 0,
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
            grid: [
                [
                    {
                        value: 9,
                        isSolved: true,
                        id: 1,
                        row: 1,
                        column: 1,
                        box: 1
                    },
                    {
                        value: 1,
                        isSolved: false,
                        id: 2,
                        row: 1,
                        column: 2,
                        box: 1
                    },
                    {
                        value: 8,
                        isSolved: true,
                        id: 3,
                        row: 1,
                        column: 3,
                        box: 1
                    },
                    {
                        value: 5,
                        isSolved: false,
                        id: 4,
                        row: 1,
                        column: 4,
                        box: 2
                    },
                    {
                        value: 7,
                        isSolved: false,
                        id: 5,
                        row: 1,
                        column: 5,
                        box: 2,
                    },
                    {
                        value: 4,
                        isSolved: true,
                        id: 6,
                        row: 1,
                        column: 6,
                        box: 2
                    },
                    {
                        value: 2,
                        isSolved: true,
                        id: 7,
                        row: 1,
                        column: 7,
                        box: 3
                    },
                    {
                        value: 6,
                        isSolved: true,
                        id: 8,
                        row: 1,
                        column: 8,
                        box: 3
                    },
                    {
                        value: 3,
                        isSolved: true,
                        id: 9,
                        row: 1,
                        column: 9,
                        box: 3
                    }
                ],
                [
                    {
                        value: 6,
                        isSolved: false,
                        id: 10,
                        row: 2,
                        column: 1,
                        box: 1
                    },
                    {
                        value: 3,
                        isSolved: true,
                        id: 11,
                        row: 2,
                        column: 2,
                        box: 1
                    },
                    {
                        value: 5,
                        isSolved: false,
                        id: 12,
                        row: 2,
                        column: 3,
                        box: 1
                    },
                    {
                        value: 9,
                        isSolved: true,
                        id: 13,
                        row: 2,
                        column: 4,
                        box: 2
                    },
                    {
                        value: 1,
                        isSolved: true,
                        id: 14,
                        row: 2,
                        column: 5,
                        box: 2
                    },
                    {
                        value: 2,
                        isSolved: true,
                        id: 15,
                        row: 2,
                        column: 6,
                        box: 2
                    },
                    {
                        value: 4,
                        isSolved: false,
                        id: 16,
                        row: 2,
                        column: 7,
                        box: 3
                    },
                    {
                        value: 8,
                        isSolved: true,
                        id: 17,
                        row: 2,
                        column: 8,
                        box: 3
                    },
                    {
                        value: 7,
                        isSolved: true,
                        id: 18,
                        row: 2,
                        column: 9,
                        box: 3
                    }
                ],
                [
                    {
                        value: 2,
                        isSolved: true,
                        id: 19,
                        row: 3,
                        column: 1,
                        box: 1
                    },
                    {
                        value: 4,
                        isSolved: true,
                        id: 20,
                        row: 3,
                        column: 2,
                        box: 1
                    },
                    {
                        value: 7,
                        isSolved: true,
                        id: 21,
                        row: 3,
                        column: 3,
                        box: 1
                    },
                    {
                        value: 8,
                        isSolved: false,
                        id: 22,
                        row: 3,
                        column: 4,
                        box: 2
                    },
                    {
                        value: 3,
                        isSolved: true,
                        id: 23,
                        row: 3,
                        column: 5,
                        box: 2
                    },
                    {
                        value: 6,
                        isSolved: true,
                        id: 24,
                        row: 3,
                        column: 6,
                        box: 2
                    },
                    {
                        value: 9,
                        isSolved: true,
                        id: 25,
                        row: 3,
                        column: 7,
                        box: 3
                    },
                    {
                        value: 1,
                        isSolved: true,
                        id: 26,
                        row: 3,
                        column: 8,
                        box: 3
                    },
                    {
                        value: 5,
                        isSolved: false,
                        id: 27,
                        row: 3,
                        column: 9,
                        box: 3
                    }
                ],
                [
                    {
                        value: 7,
                        isSolved: false,
                        id: 28,
                        row: 4,
                        column: 1,
                        box: 4
                    },
                    {
                        value: 6,
                        isSolved: true,
                        id: 29,
                        row: 4,
                        column: 2,
                        box: 4
                    },
                    {
                        value: 4,
                        isSolved: true,
                        id: 30,
                        row: 4,
                        column: 3,
                        box: 4
                    },
                    {
                        value: 2,
                        isSolved: false,
                        id: 31,
                        row: 4,
                        column: 4,
                        box: 5
                    },
                    {
                        value: 8,
                        isSolved: true,
                        id: 32,
                        row: 4,
                        column: 5,
                        box: 5
                    },
                    {
                        value: 3,
                        isSolved: false,
                        id: 33,
                        row: 4,
                        column: 6,
                        box: 5
                    },
                    {
                        value: 1,
                        isSolved: true,
                        id: 34,
                        row: 4,
                        column: 7,
                        box: 6
                    },
                    {
                        value: 5,
                        isSolved: true,
                        id: 35,
                        row: 4,
                        column: 8,
                        box: 6
                    },
                    {
                        value: 9,
                        isSolved: false,
                        id: 36,
                        row: 4,
                        column: 9,
                        box: 6
                    }
                ],
                [
                    {
                        value: 3,
                        isSolved: false,
                        id: 37,
                        row: 5,
                        column: 1,
                        box: 4
                    },
                    {
                        value: 9,
                        isSolved: true,
                        id: 38,
                        row: 5,
                        column: 2,
                        box: 4
                    },
                    {
                        value: 2,
                        isSolved: false,
                        id: 39,
                        row: 5,
                        column: 3,
                        box: 4
                    },
                    {
                        value: 6,
                        isSolved: false,
                        id: 40,
                        row: 5,
                        column: 4,
                        box: 5
                    },
                    {
                        value: 5,
                        isSolved: true,
                        id: 41,
                        row: 5,
                        column: 5,
                        box: 5
                    },
                    {
                        value: 1,
                        isSolved: true,
                        id: 42,
                        row: 5,
                        column: 6,
                        box: 5
                    },
                    {
                        value: 8,
                        isSolved: false,
                        id: 43,
                        row: 5,
                        column: 7,
                        box: 6
                    },
                    {
                        value: 7,
                        isSolved: true,
                        id: 44,
                        row: 5,
                        column: 8,
                        box: 6
                    },
                    {
                        value: 4,
                        isSolved: true,
                        id: 45,
                        row: 5,
                        column: 9,
                        box: 6
                    }
                ],
                [
                    {
                        value: 8,
                        isSolved: true,
                        id: 46,
                        row: 6,
                        column: 1,
                        box: 4
                    },
                    {
                        value: 5,
                        isSolved: true,
                        id: 47,
                        row: 6,
                        column: 2,
                        box: 4
                    },
                    {
                        value: 1,
                        isSolved: false,
                        id: 48,
                        row: 6,
                        column: 3,
                        box: 4
                    },
                    {
                        value: 4,
                        isSolved: false,
                        id: 49,
                        row: 6,
                        column: 4,
                        box: 5
                    },
                    {
                        value: 9,
                        isSolved: false,
                        id: 50,
                        row: 6,
                        column: 5,
                        box: 5
                    },
                    {
                        value: 7,
                        isSolved: true,
                        id: 51,
                        row: 6,
                        column: 6,
                        box: 5
                    },
                    {
                        value: 6,
                        isSolved: true,
                        id: 52,
                        row: 6,
                        column: 7,
                        box: 6
                    },
                    {
                        value: 3,
                        isSolved: true,
                        id: 53,
                        row: 6,
                        column: 8,
                        box: 6
                    },
                    {
                        value: 2,
                        isSolved: true,
                        id: 54,
                        row: 6,
                        column: 9,
                        box: 6
                    }
                ],
                [
                    {
                        value: 5,
                        isSolved: true,
                        id: 55,
                        row: 7,
                        column: 1,
                        box: 7
                    },
                    {
                        value: 7,
                        isSolved: false,
                        id: 56,
                        row: 7,
                        column: 2,
                        box: 7
                    },
                    {
                        value: 6,
                        isSolved: false,
                        id: 57,
                        row: 7,
                        column: 3,
                        box: 7
                    },
                    {
                        value: 1,
                        isSolved: false,
                        id: 58,
                        row: 7,
                        column: 4,
                        box: 8
                    },
                    {
                        value: 4,
                        isSolved: false,
                        id: 59,
                        row: 7,
                        column: 5,
                        box: 8
                    },
                    {
                        value: 9,
                        isSolved: false,
                        id: 60,
                        row: 7,
                        column: 6,
                        box: 8
                    },
                    {
                        value: 3,
                        isSolved: true,
                        id: 61,
                        row: 7,
                        column: 7,
                        box: 9
                    },
                    {
                        value: 2,
                        isSolved: true,
                        id: 62,
                        row: 7,
                        column: 8,
                        box: 9
                    },
                    {
                        value: 8,
                        isSolved: false,
                        id: 63,
                        row: 7,
                        column: 9,
                        box: 9
                    }
                ],
                [
                    {
                        value: 1,
                        isSolved: true,
                        id: 64,
                        row: 8,
                        column: 1,
                        box: 7
                    },
                    {
                        value: 8,
                        isSolved: true,
                        id: 65,
                        row: 8,
                        column: 2,
                        box: 7
                    },
                    {
                        value: 9,
                        isSolved: true,
                        id: 66,
                        row: 8,
                        column: 3,
                        box: 7
                    },
                    {
                        value: 3,
                        isSolved: false,
                        id: 67,
                        row: 8,
                        column: 4,
                        box: 8
                    },
                    {
                        value: 2,
                        isSolved: false,
                        id: 68,
                        row: 8,
                        column: 5,
                        box: 8
                    },
                    {
                        value: 5,
                        isSolved: true,
                        id: 69,
                        row: 8,
                        column: 6,
                        box: 8
                    },
                    {
                        value: 7,
                        isSolved: false,
                        id: 70,
                        row: 8,
                        column: 7,
                        box: 9
                    },
                    {
                        value: 4,
                        isSolved: true,
                        id: 71,
                        row: 8,
                        column: 8,
                        box: 9
                    },
                    {
                        value: 6,
                        isSolved: true,
                        id: 72,
                        row: 8,
                        column: 9,
                        box: 9
                    }
                ],
                [
                    {
                        value: 4,
                        isSolved: false,
                        id: 73,
                        row: 9,
                        column: 1,
                        box: 7
                    },
                    {
                        value: 2,
                        isSolved: true,
                        id: 74,
                        row: 9,
                        column: 2,
                        box: 7
                    },
                    {
                        value: 3,
                        isSolved: true,
                        id: 75,
                        row: 9,
                        column: 3,
                        box: 7
                    },
                    {
                        value: 7,
                        isSolved: true,
                        id: 76,
                        row: 9,
                        column: 4,
                        box: 8
                    },
                    {
                        value: 6,
                        isSolved: false,
                        id: 77,
                        row: 9,
                        column: 5,
                        box: 8
                    },
                    {
                        value: 8,
                        isSolved: false,
                        id: 78,
                        row: 9,
                        column: 6,
                        box: 8
                    },
                    {
                        value: 5,
                        isSolved: false,
                        id: 79,
                        row: 9,
                        column: 7,
                        box: 9
                    },
                    {
                        value: 9,
                        isSolved: false,
                        id: 80,
                        row: 9,
                        column: 8,
                        box: 9
                    },
                    {
                        value: 1,
                        isSolved: true,
                        id: 81,
                        row: 9,
                        column: 9,
                        box: 9
                    }
                ]
            ]
        };

        this.baseState = this.state;

    }

    resetGame = () => {
        window.location.reload();
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
                    }
                }
                return cell;
            })
            return g;
        })
        this.setState({ grid: square });

    }
    highlightSelect = (row, column, box, id) => {
        if (this.state.isPlaying === true) {
            console.log("Row: " + row + ", Column: " + column + ", Box: " + box);
            this.setState(prevState => ({
                selected: {
                    row: row,
                    column: column,
                    box: box,
                    square: id
                }
            }))
        }
    }
    startPlaying = () => {
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }))
    }


    // compareNumber = (value,id) => {
    //     if(value === this.state.selectedNumber){
    //         console.log("It's a match!");
    //         let newGrid = this.state.grid.map(g => {
    //             g.map(cell => {
    //                 if (cell.id === id){
    //                     cell.isSolved = true
    //                 }
    //                 return cell
    //             })
    //             return g
    //         })
    //         console.log(newGrid);
    //         this.setState({grid: newGrid});
    //     }
    //     else{
    //         console.log("You a stupido!");
    //         alert("A virus has been downloaded!!!");
    //     }
    // }
    render() {

        return (
            <div className="sudoku-body">
                <h1 className="sudoku-h1">Sudoku</h1>
                <main >

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
