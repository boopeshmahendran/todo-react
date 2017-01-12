import React, { Component } from 'react';
import InputForm from './components/InputForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                   id: 1,
                   task: 'Brush'
                },
                {
                    id: 2,
                    task: 'Bath'
                }
            ]
        }
    }
    
    addTask(task) {
        var id = this.state.data.length + 1;
        this.state.data.push({
            id: id,
            task: task
        });
        this.setState({
            data: this.state.data
        });
    }
  render() {
    return (
        <InputForm addTask={this.addTask.bind(this)}/>
    );
  }
}

export default App;
