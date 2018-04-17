import React from 'react';
import { timestampToTime, fixUserInput } from '../functions';

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
    prevValue = event.currentTarget.value;
    return prevValue
  }
  transformTime = (event) => {
    const timeStamp = fixUserInput(event.currentTarget.value, prevValue)
    const value = timestampToTime(timeStamp)
    const transformedTime = {
      ...this.props.event,
      [event.currentTarget.name]: value
    }
    if (event.currentTarget.name === "start") {
      // console.log(1111, event.currentTarget.name)
      transformedTime.startTimeStamp = timeStamp;
      // console.log(1111, timeStamp)
    }
    const name = event.currentTarget.name
    this.props.updateAllEvents(this.props.index, transformedTime, prevValue, name)
  }
  handleDel = () => {
    this.props.delEvent(this.props.index)
  }

  render() {
    return (
      <div>
        <li key={this.props.event.key}>
          <span>{this.props.event.startTimeStamp}</span>
          <input type="text" name="start"
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
          <input type="text" name="duration"
            value={this.props.event.duration}
            onChange={this.handleChange}
            onBlur={this.transformTime}
            onFocus={this.savePrevValue}
          />
          <input type="text" name="name" value={this.props.event.name}
            onChange={this.handleChange}
          />
          <button onClick={this.handleDel}>Del</button>
        </li>
      </div>
    );
  }
}

export default Event;
