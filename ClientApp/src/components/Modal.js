import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        const { unSolvedSquares, message, resetGame } = this.props;
        return (
            <div className={unSolvedSquares > 0 ? 'visable modal' : 'modal'}>
                <h2>
                    You WIN!!!
                </h2>
                <button onClick={resetGame}>PLAY AGAIN</button>

            </div>
        );
    }
}