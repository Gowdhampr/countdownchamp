import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            deadline : 'July 20, 2019',
            newdeadline : ''
        }
    }


    changedate() {
        console.log("button pressed");
        console.log(this.state.newdeadline);
        //this.setState({deadline : 'November 6, 2019'})
        this.setState({deadline : this.state.newdeadline});
    }

    render() {
        return (
            <div className="App">
                <div className="title-head">Countdown Champion {this.state.deadline}</div>
                <Clock
                deadline = {this.state.deadline}
                />
                <div className="deadline-input">
                    <input placeholder="Enter Deadline" onChange = { event => this.setState({ newdeadline : event.target.value })} />
                    <button type="submit" onClick = { () => this.changedate() } >change</button>
                </div>
            </div>
        )
    }
}

export default App;