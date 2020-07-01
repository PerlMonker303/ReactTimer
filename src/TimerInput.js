import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    visibility: ${props => props.isVisible ? "visible" : "hidden"};
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    padding: 1.2em;
`;

class TimerInput extends React.Component{

    render(){
        const {hours,minutes,seconds,handleHourChange, handleMinuteChange, handleSecondChange, isVisible} = this.props;

        return(
            <Container isVisible={isVisible}>
                <label>Hours:</label>
                <input type="number" min="0" max="10000" hours={hours} onClick={handleHourChange} required></input>
                <label>Minutes:</label>
                <input type="number" min="0" max="60" minutes={minutes} onClick={handleMinuteChange} required></input>
                <label>Seconds:</label>
                <input type="number" min="0" max="60" seconds={seconds} onClick={handleSecondChange} required></input>
            </Container>
        );
    }
}

export default TimerInput