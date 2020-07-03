import React from 'react'
import styled from 'styled-components';

const NavBar = styled.div`
    background-color: royalblue;
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    padding: 0px;
`;

const NavSubBarLeft = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
`;

const NavSubBarRight = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
`;

const NavButton = styled.button`
    outline: none;
    border: 0px;
    height: 100%;
    position: relative;
    background-color: transparent;
    color: white;
    font-family: "Segoe UI",Arial,sans-serif;
    font-size: 20px;
    &:hover {
        background-color: navy;
        cursor: pointer;
    }
`;

const navigationBar = (props) => {
    return(
        <NavBar>
            <NavSubBarLeft>
                <NavButton>ProducTimer</NavButton>
            </NavSubBarLeft>
            <NavSubBarRight>
                <NavButton onClick={props.clicked}>Add timer</NavButton>
            </NavSubBarRight>
        </NavBar>
    );
}

export default navigationBar