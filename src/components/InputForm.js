import React, { Component } from 'react';

class InputForm extends Component {
    submitHandler(e) {
        this.props.addTask(this.refs.txtField.value);
        this.refs.txtField.value = '';
        e.preventDefault();
    }
  render() {
      var styles = {
          textAlign: 'center'
      };
    return (
        <div style={styles}>
            <form onSubmit={this.submitHandler.bind(this)}>
                <input ref="txtField" type="text" />
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
  }
}

export default InputForm;
