import React, {Component} from 'react';

export default class Strike extends Component {
    createStrikes() {
        return this.props.strikes.map(function (row){
            return <tr>{row.map(function (cell){
                return<td>{cell.made === true ? 'X': ''}</td>
            }, this)}</tr>
        }, this)
    };
    render() {
        return (
            <div className="strike-box">
                <h2>Strikes</h2>
                <table className="strike-table">
                    <tbody>
                        {this.createStrikes()}
                    </tbody>
                </table>

            </div>
        );
    }
}