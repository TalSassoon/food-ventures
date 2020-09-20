import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export class OrderDate extends Component {
  state = {
    date: new Date(),
  }

  onChange = date =>{ 
    console.log(date, Date.now());
    this.setState({ date })
 }
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