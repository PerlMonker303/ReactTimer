import React from 'react'

class Timer extends React.Component{

    render(){
        return(
        <label onClick={this.props.showTimerInput}>{this.props.hours}:{this.props.minutes}:{this.props.seconds}</label>
        );
    }
}

export default Timer