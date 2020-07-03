import React from 'react'
import styled from 'styled-components';
import Timer from './Timer.js'
import NavigationBar from './NavigationBar.js'

const Page = styled.div`
    margin-top: 80px;
`;

class App extends React.Component{
    state = {
        currentId : -1,
        timers: [ ]
    }

    addNewTimer = () => {
        const newId = this.state.currentId + 1;
        const newTimer = {id:newId};
        let newTimers = this.state.timers.slice();
        newTimers = [...newTimers, newTimer];
        this.setState({
            currentId : newId,
            timers: newTimers
        });
    }

    deleteTimer = (id) => {
        const timerIndex = this.state.timers.findIndex((timer) => {
            return timer.id === id;
        });
        
        const newTimers = [...this.state.timers];
        newTimers.splice(timerIndex, 1);
        this.setState({
            timers: newTimers
        });
    }

    render(){
        const timers = (
            <div>
                {
                    this.state.timers.map(timer => {
                        return <Timer id={timer.id} key={timer.id} delete={(id) => this.deleteTimer(id)}/>
                    })
                }
            </div>
        );
        return(
            <div>
                <NavigationBar clicked={this.addNewTimer}/>
                <Page>
                    {timers}
                </Page>
            </div>
        );
    }
}
//<NavigationBar />
export default App