import React, { Component } from 'react';
import Timer from './Timer';

import './Sudoku.css';

export class Sudoku extends Component {

    state = {
        solution: [[1,2,3,4,5,6,7,8,9],[4,5,6,7,8,9,1,2,3],[7,8,9,1,2,3,4,5,6],[2,3,4,5,6,7,8,9,1],[5,6,7,8,9,1,2,3,4],[8,9,1,2,3,4,5,6,7],[6,7,8,9,1,2,3,4,5],[9,1,2,3,4,5,6,7,8],[3,4,5,6,7,8,9,1,2]],
        puzzle: ''
    };

    createSudoku = () => {
        let table = [];

        for(let i = 0; i < this.state.solution.length; i++){
            let children = [];
            for(let j = 0; j < this.state.solution[i].length; j++){
                children.push(<td>{this.state.solution[i][j]}</td>)
            }
            table.push(<tr>{children}</tr>)
        }
        return table;
    }

    render() {
        return (
            <div>
                <h1>Sudoku</h1>
                <div className="main">

                    <Timer />

                    <table className="gameGrid">
                        {this.createSudoku()}
                    </table>
                </div>
            </div>

        );
    }

}