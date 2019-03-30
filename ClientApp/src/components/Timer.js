import React, { Component } from 'react';

class Timer extends Component {


    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount() {
        this.intervalID =  setInterval(() => this.tick (), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        console.log("-----I've been Cleared and UnMounted------");
    }

    tick = ()  => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    };

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        this.props.startPlaying();
        if (!this.state.isRunning) {
            this.setState({previousTime: Date.now() });
        }
    };


    
    render() {
        const floored = Math.floor(this.state.elapsedTime / 1000);
        var minutes = Math.floor(floored / 60);
        const clockSeconds = (floored % 60);
        return (
            <div className="timer">
                <span className="counter">({ minutes }:{ (clockSeconds < 10) ? ('0' + clockSeconds) : clockSeconds })</span>
                <button onClick={ this.handleStopwatch } className={this.state.isRunning ? 'running':''}>
                {this.state.isRunning ? 'STOP' : 'START'}
                </button>
                <button onClick={ this.props.resetGame }>
                RESET  
                </button>
            </div>
        );
    }
} 

export default Timer;