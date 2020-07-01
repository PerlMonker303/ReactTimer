import React from 'react'
import Timer from './Timer.js'
import StartButton from './StartButton.js'
import TimerInput from './TimerInput.js'
import styled from 'styled-components';

class App extends React.Component{
    constructor(props) {
        /*Sets the initial state of the timer
        State: hours/minutes/seconds, isActive_timerInput
        Binds handles */
        super(props);
        this.state = {
            hours: "00",
            minutes: "00",
            seconds: "00",
            isActive_timerInput: false
        }

        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleMinuteChange = this.handleMinuteChange.bind(this);
        this.handleSecondChange = this.handleSecondChange.bind(this);

        this.tick = this.tick.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
        this.showTimerInput = this.showTimerInput.bind(this);
    }

    handleHourChange(event) {
        /*Sets the state by modifying the hours
        Input: event (usually click)
        Output: -*/
        var hrs = event.target.value;
        if(hrs < 10){
            hrs = "0" + hrs;
        }
        this.setState({
            hours: hrs,
            minutes: this.state.minutes,
            seconds: this.state.seconds
        })
    }

    handleMinuteChange(event){
        /*Sets the state by modifying the minutes
        Input: event (usually click)
        Output: -*/
        var min = event.target.value;
        if(min < 10){
            min = "0" + min;
        }
        this.setState({
            hours: this.state.hours,
            minutes: min,
            seconds: this.state.seconds
        })
    }

    handleSecondChange(event){
        /*Sets the state by modifying the seconds
        Input: event (usually click)
        Output: -*/
        var sec = event.target.value;
        if(sec < 10){
            sec = "0" + sec;
        }
        this.setState({
            hours: this.state.hours,
            minutes: this.state.minutes,
            seconds: sec
        })
    }

    tick() {
        /*Used for timer ticking
        (calculates values for timer, adds additional zeros, decreases secondsRemaining)
        Input: -
        Output: -*/
        var hrs = Math.floor(this.secondsRemaining / 3600);
        var min = Math.floor((this.secondsRemaining - hrs*3600) / 60);
        var sec = Math.floor(this.secondsRemaining % 60);
        console.log(this.secondsRemaining)
        console.log(hrs);
        console.log(min);
        console.log(sec);
        this.setState({
            hours: hrs,
            minutes: min,
            seconds: sec
        })
        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds
            })
        }
        if (min < 10) {
            this.setState({
                minutes: "0" + min
            })
        }
        if(hrs < 10){
            this.setState({
                hours: "0" + hrs
            })
        }
        if (hrs === 0 && min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }
            this.secondsRemaining--
        }

    startCountdown(){
        /*Initialises the timer and starts the countdown
        Input: -
        Output: -*/
        this.intervalHandle = setInterval(this.tick, 1000);
        let secOfMin = this.state.minutes * 60;
        let secOfHrs = this.state.hours * 3600;
        this.secondsRemaining = Number(this.state.seconds) + secOfMin + secOfHrs;
    }

    showTimerInput(){
        /*Shows/hides the timer input component
        Input: -
        Output: -*/
        this.setState({
            isActive_timerInput: !this.state.isActive_timerInput
        })
    }

    render(){
        return(
            <div>
                <TimerInput hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} handleHourChange={this.handleHourChange} handleMinuteChange={this.handleMinuteChange} handleSecondChange={this.handleSecondChange} isVisible={this.state.isActive_timerInput}/>
                <Timer hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}  showTimerInput={this.showTimerInput} />
                <StartButton startCountdown={this.startCountdown} />
            </div>
        );
    }
}

export default App