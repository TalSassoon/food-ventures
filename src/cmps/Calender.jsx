import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
export class OrderDate extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="calender">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          locale={"en-US"}
          
        />
      </div>
    );
  }
}