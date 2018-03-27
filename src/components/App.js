import React from 'react';
import Header from './Header';
import Event from './Event';
import sampleEvents from '../sample-events';

class App extends React.Component {
  state = {
    events: []
  }
  /*
    sortByTime = (events) => {
      return events.sort((a, b) => (a.timestamp - b.timestamp));
    }
  */
  loadSampleEvents = () => {
    // console.log(sampleEvents)
    //const sortedEvents = this.sortByTime(sampleEvents); //why it doesnt work?
    sampleEvents.sort((a, b) => (a.timestamp - b.timestamp));
    this.setState({ events: sampleEvents });
  }
  timeStampTo24hFormat = (timeStamp) => {
    let date = new Date(timeStamp);
    let hours = "0" + date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours.substr(-2) + ':' + minutes.substr(-2);
    return formattedTime
  }
  timeToTimestamp = HHmm => { return Date.parse(`1970-1-1 ${HHmm}`) }
  updateEvent = (key, updatedEvent) => {
    // console.log(this.state.events);
    const events = [...this.state.events];
    events[key] = updatedEvent;
    this.setState({ events });
  }
  tidyUpTime = (key, transformedTime, fieldName) => {
    console.log(fieldName)
    const events = [...this.state.events];
    events[key] = transformedTime;
    events.sort((a, b) => (a.timestamp - b.timestamp));
    if (fieldName === "end") {
      events.map(e =>
        (e.duration = this.timeStampTo24hFormat
          (
          this.timeToTimestamp(e.end) -
          this.timeToTimestamp(e.start)
          )
        )
      )
    }
    events.map(e =>
      (e.end = this.timeStampTo24hFormat
        (
        this.timeToTimestamp(e.start) +
        this.timeToTimestamp(e.duration)
        )
      )
    )
    this.setState({ events });
    // () => this.sortByTime;
  }
  render() {
    //this.timeStampTo24hFormat(232323232);
    //this.sortByTime(this.state.events)
    //console.log("sortByTime");
    return (
      <div>
        <Header subject="Internet Safety" />
        <button onClick={this.loadSampleEvents}>Load sample events</button>
        <button onClick={this.sortByTime}>sort</button>
        {Object.keys(this.state.events).map(key => <Event
          event={this.state.events[key]}
          key={key}
          index={key}
          updateEvent={this.updateEvent}
          tidyUpTime={this.tidyUpTime}
        />)}
      </div>

    );
  }
}

export default App;
