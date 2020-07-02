import React from 'react'
import styled from 'styled-components';
import Timer from './Timer.js'
import NavigationBar from './NavigationBar.js'

const Page = styled.div`
    margin-top: 80px;
`;

class App extends React.Component{
    render(){
        return(
            <Page>
                <NavigationBar />
                <Timer></Timer>
                <Timer></Timer>
                <Timer></Timer>
            </Page>
        );
    }
}
//<NavigationBar />
export default App