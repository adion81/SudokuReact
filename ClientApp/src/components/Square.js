import React, {Component} from 'react';

export default class Square extends Component{
    render() {
        const {box, row, id, col, value, isSolved, selected} = this.props;
        return (
            <td onClick={() => this.props.highlightSelect(row, col, box, id)} className={selected.square === id && isSolved === false ? 'selected-box' :selected.row === row || selected.col === col ? 'square selected': 'square'} id={id}>{!isSolved ? '': value}</td>
        );
    }

}