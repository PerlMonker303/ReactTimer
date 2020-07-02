import React from 'react'
import styled from 'styled-components';

const Overlay = styled.div`
    -webkit-transition-property: display, background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
    transition-property: display, background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
    transition-property: display, background-color, border-color, color, box-shadow, filter;
    transition-property: display, background-color, border-color, color, box-shadow, filter, -webkit-box-shadow, -webkit-filter;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    display: ${props => props.isVisible ? "auto" : "none"};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.2);
`;

const ContainerWrapper = styled.div`
    cursor: auto;
    text-align: center;
    padding: 1.1em 1.2em;
    border: 1px solid #888;
    width: 70%;
    margin: 15% auto;
    background-color: royalblue;
    color: white;
    font-family: "Segoe UI",Arial,sans-serif;
    font-size: 18px;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`;

const ContainerTitle = styled.div`
    position: relative;
`;

const Title = styled.span`
    display: inline-block;
    font-size: 28px;
    font-weight: bold;
`;

const CloseButton = styled.span`
    display: inline-block;
    color: black;
    position: absolute;
    top: -20px;
    right: 0px;
    font-size: 28px;
    font-weight: bold;
    user-select: none;
    &:hover {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;



const Message = styled.p`
    visibility: ${props => props.isTimerStarted ? "visible" : "hidden"};
    position: static;
    margin: auto;
    width: 80%;
    background-color: red;
`;

const Block = styled.div`
    font-size: 20px;
    position: relative;
    display: inline-block;
    width: 97px;
`;

const StyledInput = styled.input`
    font-size: 18px;
    margin-top: 10px;
    border: none;
    padding: 2px;
    border-radius: 0.1rem;
    max-width: 60px;
`;

const ContainerButtonDone = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
    display: block;
    margin-top: 15px;
`;

const ButtonDone = styled.button`
    -webkit-transition-property: background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
    transition-property: background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
    transition-property: background-color, border-color, color, box-shadow, filter;
    transition-property: background-color, border-color, color, box-shadow, filter, -webkit-box-shadow, -webkit-filter;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    border-width: 0;
    padding: 6px 12px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    background-color: ${props => props.bgColor};
    &:hover {
        background-color: ${props => props.bgHoverColor};
    }
    position: absolute;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
`;

class TimerInput extends React.Component{
    render(){
        const {hours,minutes,seconds,handleHourChange, handleMinuteChange, handleSecondChange, isVisible, showTimerInput, isTimerStarted, handleHourClicked, handleMinuteClicked, handleSecondClicked} = this.props;

        return(
            <Overlay isVisible={isVisible}>
                <ContainerWrapper>
                    <ContainerTitle>
                        <CloseButton onClick={showTimerInput}>&times;</CloseButton>
                        <Title>Edit Timer</Title>
                    </ContainerTitle>
                    <Message isTimerStarted={isTimerStarted}>Timer is running</Message>
                    <Block>
                        <label>Hours</label>
                        <StyledInput type="number" min="0" max="9999" hours={hours} onChange={handleHourChange} onClick={handleHourClicked} value={hours} required></StyledInput>
                    </Block>
                    <Block>
                        <label>Minutes</label>
                        <StyledInput type="number" min="0" max="59" minutes={minutes} onChange={handleMinuteChange} onClick={handleMinuteClicked} value={minutes} required></StyledInput>
                    </Block>
                    <Block>
                        <label>Seconds</label>
                        <StyledInput type="number" min="0" max="59" seconds={seconds} onChange={handleSecondChange} onClick={handleSecondClicked} value={seconds} required></StyledInput>
                    </Block>
                    <ContainerButtonDone>
                        <ButtonDone bgColor="#29a329" bgHoverColor="black" onClick={showTimerInput}>Done</ButtonDone>
                    </ContainerButtonDone>
                </ContainerWrapper>
            </Overlay>
        );
    }
}

export default TimerInput