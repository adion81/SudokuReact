import React, { Component } from 'react';
import Square from './Square';

export default class Sudoku extends Component {

    createSudoku() {
        return this.props.grid.map(function (row) {

            return <tr>{row.map(function (cell) {
                return <Square
                    id={cell.id}
                    isSolved={cell.isSolved}
                    value={cell.value}
                />
            })}</tr>
        })

    }
    render() {
        return (
            <table>
                <tbody>
                    {this.createSudoku()}
                </tbody>
            </table>
        );
    }

}