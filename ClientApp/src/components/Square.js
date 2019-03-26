import React, {Component} from 'react';

export default class Square extends Component{
    render() {
        return (
            <td className="square"id={this.props.id}>{!this.props.isSolved ? '': this.props.value}</td>
        );

    }

}