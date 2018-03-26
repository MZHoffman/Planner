import React from 'react';

class Event extends React.Component {
  handleChange = (event) => {
    const updatedEvent = {
      ...this.props.event,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateEvent(this.props.index, updatedEvent);
  }
  transformTime = (event) => {
    let value = event.currentTarget.value;
    console.log(event.currentTarget.name, "jakis")

    let iSitAfternoon = value.includes("p");
    value = value.replace(/\D/g, '');//removing non numeric
    value = value.length === 1 ? `0${value}00` : value //
    value = value.length < 3 ? `${value}00` : value
    value = value.length < 4 ? `0${value}` : value
    value = value.length > 4 ? (alert("Max 4 digits please"), "0000") : value;
    value = value.length === 4 ? (
      value.slice(0, -2) > 23 ? (value = "2300") : value,
      value.substr(-2) > 59 ? (value = "2300") : value,
      `${value.slice(0, -2)}:${value.substr(-2)}`
    ) : value
    let startTimeStamp = false
    if (event.currentTarget.name === "start") {
      startTimeStamp = Date.parse(`1970-1-1 ${value}`);
      startTimeStamp = iSitAfternoon ? startTimeStamp + 43200000 : startTimeStamp;
    }
    const transformedTime = {
      ...this.props.event,
      [event.currentTarget.name]: value,
    }
    if (startTimeStamp) {
      transformedTime["timestamp"] = startTimeStamp;
    }
    this.props.tidyUpTime(this.props.index, transformedTime)
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
        />
        <input type="text" name="end" value={this.props.event.end}
          onChange={this.handleChange}
          onBlur={this.transformTime}
        />
        <input type="text" name="duration" value={this.props.event.duration}
          onChange={this.handleChange}
          onBlur={this.transformTime}
        />
        <input type="text" name="name" value={this.props.event.name}
          onChange={this.handleChange}
        />
      </li>
    );
  }
}

export default Event;
