import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    line-height: 1;
    border-radius: 500px;
    padding: 16px 48px 18px;
    -webkit-transition-property: background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
    transition-property: background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
    transition-property: background-color, border-color, color, box-shadow, filter;
    transition-property: background-color, border-color, color, box-shadow, filter, -webkit-box-shadow, -webkit-filter;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    border-width: 0;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    color: #FFF;
    background-color: ${props => props.bgColor};
    &:hover {
        background-color: ${props => props.bgHoverColor};
    }
`;

class StartButton extends React.Component{
    render(){
        return(
            <Button bgColor="#1DB954" bgHoverColor="#000000"
                onClick={this.props.startCountdown}
            >Start</Button>
        );
    }
}

export default StartButton