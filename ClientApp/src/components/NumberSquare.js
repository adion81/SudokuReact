import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NumberSquare extends Component{
    render() {
        return (
            <td onClick={() => this.props.handleSelect (this.props.id)} className={this.props.selectedNumber === this.props.id ? 'numbers selected' : 'numbers'}id={this.props.id}>{this.props.value}</td>
        );

    }

}

NumberSquare.propTypes = {
    handleSelect: PropTypes.func,
    selectedNumber: PropTypes.number
}