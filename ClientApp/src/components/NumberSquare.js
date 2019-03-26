import React, {Component} from 'react';

export default class NumberSquare extends Component{
    render() {
        return (
            <td onClick={() => this.props.handleSelect (this.props.id)} className={!this.props.isSelected ? 'numbers': 'numbers selected'}id={this.props.id}>{this.props.value}</td>
        );

    }

}