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
                    row={cell.row}
                    column={cell.column}
                    box={cell.box}
                    selected={this.props.selected}
                    highlightSelect={this.props.highlightSelect}
                />
            },this)}</tr>
        },this)

    }
    render() {
        return (
            <table className="board">
                <tbody>
                    {this.createSudoku()}
                </tbody>
            </table>
        );
    }

}