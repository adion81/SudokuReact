import React, { Component } from 'react';
import NumberSquare from './NumberSquare';

export default class NumberSelect extends Component {
    createNumbers = () => {
        return this.props.numbers.map(function (row) {
            return <NumberSquare
                id={row.id}
                value={row.value}
                isSelected={row.isSelected}
                handleSelect={this.props.handleSelect}
            />
        })
    }
    render() {
        return (
            <div>
                <table className="numbers">
                    <tbody>
                        <tr>

                        {this.createNumbers()}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}