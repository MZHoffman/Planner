import React from 'react';
import Event from './Event';
import AddEventForm from './AddEventForm';
import { timeMath, timeToTimestamp } from '../functions'

class App extends React.Component {
  state = {
    events: [
      { start: '08:00', end: '09:03', duration: '01:00', startTimeStamp: 28800000, name: '0Begining' },
      { start: '10:00', end: '13:03', duration: '01:00', startTimeStamp: 36000000, name: '1Lunch' },
      { start: '11:00', end: '12:03', duration: '01:00', startTimeStamp: 39600000, name: '2Speech' },
      { start: '12:00', end: '13:03', duration: '01:00', startTimeStamp: 43200000, name: '3Speech 1' },
      { start: '13:00', end: '14:03', duration: '01:00', startTimeStamp: 46800000, name: '4Speech' },
      { start: '14:00', end: '15:03', duration: '01:00', startTimeStamp: 50400000, name: '5Speech' },
      { start: '15:00', end: '16:03', duration: '01:00', startTimeStamp: 54000000, name: '6Networking' },
      { start: '16:00', end: '17:03', duration: '01:00', startTimeStamp: 57600000, name: '7End' },
    ]
  }

  updateEvent = (key, updatedEvent) => {
    const events = [...this.state.events];
    events[key] = updatedEvent;
    this.setState({ events });
  }

  lastEventEnd = () => {
    if (this.state.events.slice(-1)[0]) {
      return this.state.events.slice(-1)[0].end
    }
    return "08:00"
  }

  sortEvents = (events) => { events.sort((a, b) => (a.startTimeStamp - b.startTimeStamp)); }

  addEvent = (event) => {
    const events = [...this.state.events];
    events.push(event)
    this.setState({ events });
  }

  delEvent = (key) => {
    console.log("Delete event ", key)
    const events = [...this.state.events];
    events.splice(key, 1)
    if (key > 0 && events[key]) { // checks if its not the first event
      events[key - 1].duration = timeMath(events[key].start, events[key - 1].start, "sub")
      events[key - 1].end = timeMath(events[key - 1].start, events[key - 1].duration, "add")
    }
    this.setState({ events });
  }
  // Updates all events in the array after the one we have changed
  updateFutureEvents = (events, key) => {
    events.map((v, k) => {
      if (k > key) {
        events[k].start = events[k - 1].end
        events[k].startTimeStamp = timeToTimestamp(events[k].start)
        if ((timeToTimestamp(events[k].start) + timeToTimestamp(events[k].duration) > 86340000)) {
          events[k].duration = "00:00"
          console.log("Changing duration to 00:00 to avoid going over midnight")
        }
        events[k].end = timeMath(events[k].start, events[k].duration, "add")
      }
      return events
    }
    )
  }
  updateAllEvents = (key, transformedTime, prevValue, fieldName) => {
    const events = [...this.state.events];
    // make sure that transformed time is not already taken by other event
    const isTaken = events.some((e) => e.start === transformedTime.start && e.startTimeStamp === transformedTime.startTimeStamp
    )
    console.log(typeof (key), key, fieldName, typeof (fieldName))
    if (isTaken && fieldName === "start") {
      events[key][fieldName] = prevValue;
    } else {
      events[key] = transformedTime;
    }
    if (!isTaken) {
      const eventB4Sorting = events[key]
      this.sortEvents(events); // sort only if it wasn't taken (so time changed)
      key = events.indexOf(eventB4Sorting) // the new key after sorting
    }
    if (fieldName === "start") {
      if (key > 0) { // checks if its not the first event
        events[key - 1].duration = timeMath(events[key].start, events[key - 1].start, "sub")
        // change end itme of previous event
        events[key - 1].end = timeMath(events[key - 1].start, events[key - 1].duration, "add")
      }
      // if ends after 23:59 set duration to 00:00
      if ((timeToTimestamp(events[key].start) + timeToTimestamp(events[key].duration) > 86340000)) {
        events[key].duration = "00:00"
        console.log("Changing duration to 00:00 to avoid going over midnight")
      }
      // change end time of current event
      events[key].end = timeMath(events[key].start, events[key].duration, "add")
      // change future events times
      this.updateFutureEvents(events, key)
    } else if (fieldName === "end") {
      if (timeToTimestamp(events[key].start) > timeToTimestamp(events[key].end)) {
        events[key].end = prevValue
      }
      events[key].duration = timeMath(events[key].end, events[key].start, "sub")
      this.updateFutureEvents(events, key)
    } else if (fieldName === "duration") {
      events[key].end = timeMath(events[key].duration, events[key].start, "add")
      this.updateFutureEvents(events, key)
    }
    this.setState({ events })
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.events).map(key => <Event // to rethink why Ocject.keys
          event={this.state.events[key]}
          key={key}
          index={key}
          updateEvent={this.updateEvent}
          updateAllEvents={this.updateAllEvents}
          delEvent={this.delEvent}
        />)}
        <AddEventForm
          lastEventEnd={this.lastEventEnd()}
          addEvent={this.addEvent}
        />
      </div>
    );
  }
}

export default App;