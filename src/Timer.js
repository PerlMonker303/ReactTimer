import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    left: 50%;
    top: 30%;
    margin-top: -50px;
    margin-left: -95px;
    font-size: 50px;
    letter-spacing: 2px;
    min-width: 160px;
    text-align: center;
    &:hover {
        color: navy;
        text-decoration: none;
        cursor: pointer;
    }
`;

class Timer extends React.Component{
    render(){
        return(
            <Container onClick={this.props.showTimerInput}>
                {this.props.hours}:{this.props.minutes}:{this.props.seconds}
            </Container>
        );
    }
}

export default Timer