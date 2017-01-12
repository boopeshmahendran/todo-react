import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    var listStyle = {
        listStyleType: 'none',
        textTransform: 'uppercase',
        width: '100%',
        maxWidth: 500,
        paddingLeft: 0,
        margin: '10px auto'
    };
    var listItemStyle = {
        padding: 20,
        border: '2px solid #333'
    };
    return (
        <div>
            <ul style={listStyle}>
                {this.props.data.map((x, i) => (
                     <li style={listItemStyle} key={i} onClick={() => this.props.deleteTask(i)}>
                        {x.task}
                    </li>
                 ))}
            </ul>
        </div>
    );
  }
}

export default TodoList;
