import React, { Component } from 'react';

class InputForm extends Component {
    submitHandler(e) {
        this.props.addTask(this.refs.txtField.value);
        this.refs.txtField.value = '';
        e.preventDefault();
    }
  render() {
    return (
        <div>
            <form onSubmit={this.submitHandler.bind(this)}>
                <input ref="txtField" type="text" />
                <input type="submit"/>
            </form>
        </div>
    );
  }
}

export default InputForm;
