import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;
