import React from 'react';
import { timeToTimestamp, timestampToTime, fixUserInput } from '../functions';
let prevValue = 0
class Event extends React.Component {
  handleChange = (event) => {
    const updatedEvent = {
      ...this.props.event,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateEvent(this.props.index, updatedEvent);
  }
  savePrevValue = (event) => {
    let prevValue = event.currentTarget.value;
    return prevValue
  }
  transformTime = (event) => {
    let timeStamp = fixUserInput(event.currentTarget.value, prevValue)

    let value = timestampToTime(timeStamp)

    const transformedTime = {
      ...this.props.event,
      [event.currentTarget.name]: value,
    }
    if (event.currentTarget.name === "start") {
      transformedTime["timestamp"] = timeStamp;
    }
    this.props.tidyUpTime(this.props.index, transformedTime, event.currentTarget.name)
  }

  render() {
    return (
      <li key={this.props.event.key}>
        <span>{this.props.event.timestamp}</span>
        <input
          type="text"
          name="start"
          value={this.props.event.start}
          onChange={this.handleChange}
          onBlur={this.transformTime}
          onFocus={this.savePrevValue}
        />
        <input type="text" name="end"
          value={this.props.event.end}
          onChange={this.handleChange}
          onBlur={this.transformTime}
          onFocus={this.savePrevValue}
        />
        <input type="text" name="duration" value={this.props.event.duration}
          onChange={this.handleChange}
          onBlur={this.transformTime}
          onFocus={this.savePrevValue}
        />
        <input type="text" name="name" value={this.props.event.name}
          onChange={this.handleChange}
        />
      </li>
    );
  }
}

export default Event;
