import React from 'react'
import Timer from './Timer.js'
import StartButton from './StartButton.js'
import TimerInput from './TimerInput.js'
import NavigationBar from './NavigationBar'

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
            miliseconds: "",
            isActive_timerInput: false,
            isTimerStarted: false
        }

        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleMinuteChange = this.handleMinuteChange.bind(this);
        this.handleSecondChange = this.handleSecondChange.bind(this);

        this.milisecondsRemaining = 0;
        this.tick = this.tick.bind(this);
        this.triggerCountdown = this.triggerCountdown.bind(this);
        this.showTimerInput = this.showTimerInput.bind(this);
        this.handleHourClicked = this.handleHourClicked.bind(this);
        this.handleMinuteClicked = this.handleMinuteClicked.bind(this);
        this.handleSecondClicked = this.handleSecondClicked.bind(this);
    }

    handleHourChange(event) {
        /*Sets the state by modifying the hours
        Input: event (usually click)
        Output: -*/
        if(!this.state.isTimerStarted){
            var hrs = event.target.value;
            if(hrs < 10 && hrs > 0){
                hrs = "0" + hrs;
            }
            else if(hrs === "0"){
                this.setState({
                    hours: ""
                });
                return;
            }
            else if(hrs[0] === "0"){
                hrs = hrs.substring(1);
            }
            if(hrs <= 9999){
                this.setState({
                    hours: hrs
                })
            }
        }
    }

    handleMinuteChange(event){
        /*Sets the state by modifying the minutes
        Input: event (usually click)
        Output: -*/
        if(!this.state.isTimerStarted){
            var min = event.target.value;
            if(min < 10 && min > 0){
                min = "0" + min;
            }
            else if(min === "0"){
                this.setState({
                    minutes: ""
                });
                return;
            }
            else if(min[0] === "0"){
                min = min.substring(1);
            }
            if(min <= 9999){
                this.setState({
                    minutes: min
                })
            }
        }
    }

    handleSecondChange(event){
        /*Sets the state by modifying the seconds
        Input: event (usually click)
        Output: -*/
        if(!this.state.isTimerStarted){
            var sec = event.target.value;
            if(sec < 10 && sec > 0){
                sec = "0" + sec;
            }else if(sec === "0"){
                this.setState({
                    seconds: ""
                });
                return;
            }
            else if(sec[0] === "0"){
                sec = sec.substring(1);
            }
            if(sec <= 59){
                this.setState({
                    seconds: sec
                })
            }
        }
    }

    tick() {
        /*Used for timer ticking
        (calculates values for timer, adds additional zeros, decreases secondsRemaining)
        Input: -
        Output: -*/
        if(this.state.isTimerStarted){
            var ms = this.milisecondsRemaining;
            if(ms === 0){
                this.secondsRemaining--;
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
                    this.setState({
                        isTimerStarted: false
                    });
                }else{
                    this.milisecondsRemaining = 9;
                }
            }else{
                console.log(this.milisecondsRemaining);
                this.milisecondsRemaining--;
            }
        }
    }

    triggerCountdown(){
        /*Initialises the timer and starts the countdown
        Input: -
        Output: -*/
        if(this.state.isTimerStarted === false){//start the timer
            if (!(this.state.hours === '00' && this.state.minutes === '00' & this.state.seconds === '00')) {
                this.intervalHandle = setInterval(this.tick, 100);
                let secOfMin = this.state.minutes * 60;
                let secOfHrs = this.state.hours * 3600;
                this.secondsRemaining = Number(this.state.seconds) + secOfMin + secOfHrs;
                
                this.setState({
                    isTimerStarted: true
                });
            }
        }else{//stop the timer
            clearInterval(this.intervalHandle);
            this.setState({
                isTimerStarted: false
            });
        }
    }

    showTimerInput(){
        /*Shows/hides the timer input component
        Input: -
        Output: -*/
        if(this.state.isActive_timerInput){
            if(this.state.hours === ""){
                this.setState({
                    hours: "00"
                });
            }
        }
        this.setState({
            isActive_timerInput: !this.state.isActive_timerInput
        })
    }

    handleHourClicked(){
        if(this.state.hours === "00"){
            this.setState({
                hours: ""
            });
        }
        if(this.state.minutes === ""){
            this.setState({
                minutes: "00"
            });
        }
        if(this.state.seconds === ""){
            this.setState({
                seconds: "00"
            });
        }
    }

    handleMinuteClicked(){
        if(this.state.hours === ""){
            this.setState({
                hours: "00"
            });
        }
        if(this.state.minutes === "00"){
            this.setState({
                minutes: ""
            });
        }
        if(this.state.seconds === ""){
            this.setState({
                seconds: "00"
            });
        }
    }

    handleSecondClicked(){
        if(this.state.hours === ""){
            this.setState({
                hours: "00"
            });
        }
        if(this.state.minutes === ""){
            this.setState({
                minutes: "00"
            });
        }
        if(this.state.seconds === "00"){
            this.setState({
                seconds: ""
            });
        }
    }

    render(){
        return(
            <div>
                <NavigationBar />
                <TimerInput hours={this.state.hours} 
                    minutes={this.state.minutes} 
                    seconds={this.state.seconds} 
                    handleHourChange={this.handleHourChange} 
                    handleMinuteChange={this.handleMinuteChange} 
                    handleSecondChange={this.handleSecondChange} 
                    isVisible={this.state.isActive_timerInput} 
                    showTimerInput={this.showTimerInput} 
                    isTimerStarted={this.state.isTimerStarted} 
                    handleHourClicked={this.handleHourClicked}
                    handleMinuteClicked={this.handleMinuteClicked}
                    handleSecondClicked={this.handleSecondClicked}
                />
                <Timer hours={this.state.hours} 
                    minutes={this.state.minutes} 
                    seconds={this.state.seconds} 
                    showTimerInput={this.showTimerInput}
                />
                <StartButton triggerCountdown={this.triggerCountdown} 
                    isTimerStarted={this.state.isTimerStarted}
                />
            </div>
        );
    }
}
//<NavigationBar />
export default App