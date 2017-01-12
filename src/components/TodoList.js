import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
        <div>
            <ul>
                {this.props.data.map((x, i) => (
                     <li key={i}>
                        {x.task}
                        <button onClick={() => this.props.deleteTask(i)}>X</button>
                    </li>
                 ))}
            </ul>
        </div>
    );
  }
}

export default TodoList;
