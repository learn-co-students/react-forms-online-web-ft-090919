import React, {Component} from 'react';

export default class DisplayName extends Component{

  listData = () => {
    this.props.data.map( person  => <li>{person.firstName} {person.lastName}</li>)
  }

  render(){
    console.log(this.props.data)
    return (
      <div>
        <h1>Welcome {this.props.firstName} {this.props.lastName}</h1>
        <h2>{this.props.data.length} Records</h2>
        <ul>
          {this.listData()}
        </ul>
      </div>
    )
  }
}
