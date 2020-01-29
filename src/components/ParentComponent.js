import React from 'react';
import Form from './Form';
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div > < span > {
  //       data.firstName
  //     } < /span><span>{data.lastName}</span > < /div>
  //   })
  // }
