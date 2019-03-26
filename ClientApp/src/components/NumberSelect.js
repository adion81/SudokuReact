import React, { Component } from 'react';

export class NumberSelect extends Component {
    render() {
        const { getNumber } = this.props;
        return (
            <div>
                <table className="numbers">
                    <tbody>
                        <tr className="num-select">
                            <td onClick={() => getNumber(1)}>1</td>
                            <td onClick={() => getNumber(2)}>2</td>
                            <td onClick={() => getNumber(3)}>3</td>
                            <td onClick={() => getNumber(4)}>4</td>
                            <td onClick={() => getNumber(5)}>5</td>
                            <td onClick={() => getNumber(6)}>6</td>
                            <td onClick={() => getNumber(7)}>7</td>
                            <td onClick={() => getNumber(8)}>8</td>
                            <td onClick={() => getNumber(9)}>9</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}