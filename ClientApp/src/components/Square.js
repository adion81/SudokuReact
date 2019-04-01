import React, {Component} from 'react';

export default class Square extends Component{
    render() {
        const {box, row, id, column, value, isSolved, selected} = this.props;
        return (
            <td onClick={() => this.props.highlightSelect(row, column, box, id)} className={selected.row === row || selected.column === column ? 'square selected': 'square' + selected.square === id ? 'selected-box': 'square'} id={id}>{!isSolved ? '': value}</td>
        );
    }

}