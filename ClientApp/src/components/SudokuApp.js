import React, { Component } from 'react';
import Timer from './Timer';
import Sudoku from './Sudoku.js';
import NumberSelect from './NumberSelect';

import './Sudoku.css';

export class SudokuApp extends Component {

    state = {
        numbers: [
            {
                value: 1,
                id: 1,
                isSelected: false
            },
            {
                value: 2,
                id: 2,
                isSelected: false
            },
            {
                value: 3,
                id: 3,
                isSelected: false
            },
            {
                value: 4,
                id: 4,
                isSelected: false
            },
            {
                value: 5,
                id: 5,
                isSelected: false
            },
            {
                value: 6,
                id: 6,
                isSelected: false
            },
            {
                value: 7,
                id: 7,
                isSelected: false
            },
            {
                value: 8,
                id: 8,
                isSelected: false
            },
            {
                value: 9,
                id: 9,
                isSelected: false
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
                },
                {
                    value: 1,
                    isSolved: false,
                    id: 2,
                },
                {
                    value: 8,
                    isSolved: true,
                    id: 3,
                },
                {
                    value: 5,
                    isSolved: false,
                    id: 4,
                },
                {
                    value: 7,
                    isSolved: false,
                    id: 5,
                },
                {
                    value: 4,
                    isSolved: true,
                    id: 6,
                },
                {
                    value: 2,
                    isSolved: true,
                    id: 7,
                },
                {
                    value: 6,
                    isSolved: true,
                    id: 8,
                },
                {
                    value: 3,
                    isSolved: true,
                    id: 9,
                }
            ],
            [
                {
                    value: 6,
                    isSolved: false,
                    id: 10,
                },
                {
                    value: 3,
                    isSolved: true,
                    id: 11,
                },
                {
                    value: 5,
                    isSolved: false,
                    id: 12,
                },
                {
                    value: 9,
                    isSolved: true,
                    id: 13,
                },
                {
                    value: 1,
                    isSolved: true,
                    id: 14,
                },
                {
                    value: 2,
                    isSolved: true,
                    id: 15,
                },
                {
                    value: 4,
                    isSolved: false,
                    id: 16,
                },
                {
                    value: 8,
                    isSolved: true,
                    id: 17,
                },
                {
                    value: 7,
                    isSolved: true,
                    id: 18,
                }
            ],
            [
                {
                    value: 2,
                    isSolved: true,
                    id: 19,
                },
                {
                    value: 4,
                    isSolved: true,
                    id: 20,
                },
                {
                    value: 7,
                    isSolved: true,
                    id: 21,
                },
                {
                    value: 8,
                    isSolved: false,
                    id: 22,
                },
                {
                    value: 3,
                    isSolved: true,
                    id: 23,
                },
                {
                    value: 6,
                    isSolved: true,
                    id: 24,
                },
                {
                    value: 9,
                    isSolved: true,
                    id: 25,
                },
                {
                    value: 1,
                    isSolved: true,
                    id: 26,
                },
                {
                    value: 5,
                    isSolved: false,
                    id: 27,
                }
            ],
            [
                {
                    value: 7,
                    isSolved: false,
                    id: 28,
                },
                {
                    value: 6,
                    isSolved: true,
                    id: 29,
                },
                {
                    value: 4,
                    isSolved: true,
                    id: 30,
                },
                {
                    value: 2,
                    isSolved: false,
                    id: 31,
                },
                {
                    value: 8,
                    isSolved: true,
                    id: 32,
                },
                {
                    value: 3,
                    isSolved: false,
                    id: 33,
                },
                {
                    value: 1,
                    isSolved: true,
                    id: 34,
                },
                {
                    value: 5,
                    isSolved: true,
                    id: 35,
                },
                {
                    value: 9,
                    isSolved: false,
                    id: 36,
                }
            ],
            [
                {
                    value: 3,
                    isSolved: false,
                    id: 37,
                },
                {
                    value: 9,
                    isSolved: true,
                    id: 38,
                },
                {
                    value: 2,
                    isSolved: false,
                    id: 39,
                },
                {
                    value: 6,
                    isSolved: false,
                    id: 40,
                },
                {
                    value: 5,
                    isSolved: true,
                    id: 41,
                },
                {
                    value: 1,
                    isSolved: true,
                    id: 42,
                },
                {
                    value: 8,
                    isSolved: false,
                    id: 43,
                },
                {
                    value: 7,
                    isSolved: true,
                    id: 44,
                },
                {
                    value: 4,
                    isSolved: true,
                    id: 45,
                }
            ],
            [
                {
                    value: 8,
                    isSolved: true,
                    id: 46,
                },
                {
                    value: 5,
                    isSolved: true,
                    id: 47,
                },
                {
                    value: 1,
                    isSolved: false,
                    id: 48,
                },
                {
                    value: 4,
                    isSolved: false,
                    id: 49,
                },
                {
                    value: 9,
                    isSolved: false,
                    id: 50,
                },
                {
                    value: 7,
                    isSolved: true,
                    id: 51,
                },
                {
                    value: 6,
                    isSolved: true,
                    id: 52,
                },
                {
                    value: 3,
                    isSolved: true,
                    id: 53,
                },
                {
                    value: 2,
                    isSolved: true,
                    id: 54,
                }
            ],
            [
                {
                    value: 5,
                    isSolved: true,
                    id: 55,
                },
                {
                    value: 7,
                    isSolved: false,
                    id: 56,
                },
                {
                    value: 6,
                    isSolved: false,
                    id: 57,
                },
                {
                    value: 1,
                    isSolved: false,
                    id: 58,
                },
                {
                    value: 4,
                    isSolved: false,
                    id: 59,
                },
                {
                    value: 9,
                    isSolved: false,
                    id: 60,
                },
                {
                    value: 3,
                    isSolved: true,
                    id: 61,
                },
                {
                    value: 2,
                    isSolved: true,
                    id: 62,
                },
                {
                    value: 8,
                    isSolved: false,
                    id: 63,
                }
            ],
            [
                {
                    value: 1,
                    isSolved: true,
                    id: 64,
                },
                {
                    value: 8,
                    isSolved: true,
                    id: 65,
                },
                {
                    value: 9,
                    isSolved: true,
                    id: 66,
                },
                {
                    value: 3,
                    isSolved: false,
                    id: 67,
                },
                {
                    value: 2,
                    isSolved: false,
                    id: 68,
                },
                {
                    value: 5,
                    isSolved: true,
                    id: 69,
                },
                {
                    value: 7,
                    isSolved: false,
                    id: 70,
                },
                {
                    value: 4,
                    isSolved: true,
                    id: 71,
                },
                {
                    value: 6,
                    isSolved: true,
                    id: 72,
                }
            ],
            [
                {
                    value: 4,
                    isSolved: false,
                    id: 73,
                },
                {
                    value: 2,
                    isSolved: true,
                    id: 74,
                },
                {
                    value: 3,
                    isSolved: true,
                    id: 75,
                },
                {
                    value: 7,
                    isSolved: true,
                    id: 76,
                },
                {
                    value: 6,
                    isSolved: false,
                    id: 77,
                },
                {
                    value: 8,
                    isSolved: false,
                    id: 78,
                },
                {
                    value: 5,
                    isSolved: false,
                    id: 79,
                },
                {
                    value: 9,
                    isSolved: false,
                    id: 80,
                },
                {
                    value: 1,
                    isSolved: true,
                    id: 81,
                }
            ]
        ]
    };

    handleSelect = (id) => {
        this.setState( prevState => ({
            isSelected: !prevState.numbers[id - 1].isSelected
        }))
    }

    getNumber = (num) => {
        console.log(num);
        this.setState( prevState => ({
            isGuessing: !prevState.isGuessing,
        }));
        if(!this.state.isGuessing){
            this.setState( prevState => ({
                guess: prevState.guess = num
            }));
        }
    }
    render() {

        return (
            <div>
                <h1>Sudoku</h1>
                <main >
    
                    <Timer />
    
                    <Sudoku
                        grid={this.state.grid}
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
