import React, { Component } from 'react';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

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
    
    deleteTask(index) {
        this.state.data.splice(index, 1);
        this.setState({
            data: this.state.data
        });
    }
  render() {
    return (
        <div>
            <InputForm addTask={this.addTask.bind(this)}/>
            <TodoList data={this.state.data} deleteTask={this.deleteTask.bind(this)}/>
        </div>
    );
  }
}

export default App;
