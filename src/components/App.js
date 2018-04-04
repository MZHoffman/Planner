import React from 'react';
import Header from './Header';
import Event from './Event';
import sampleEvents from '../sample-events';
import { timeMath } from '../functions'

class App extends React.Component {
  state = {
    events: []
  }

  loadSampleEvents = () => {
    sampleEvents.sort((a, b) => (a.timestamp - b.timestamp));
    this.setState({ events: sampleEvents });
  }

  updateEvent = (key, updatedEvent) => {
    const events = [...this.state.events];
    events[key] = updatedEvent;
    this.setState({ events });
  }

  changeEndTimes = () => {
    const events = this.state.events
    events.map((e, k) => (e.end = timeMath(e.start, e.duration, "add"
    )));
    this.setState({ events })
  }

  updateAllEvents = (key, transformedTime) => {
    const events = [...this.state.events];
    console.log("000", this.state.events);
    console.log("111", JSON.stringify(events));
    //events[key] = transformedTime;
    //console.log("222", this.state.events);
    events[key].start = "11:11";
    events.sort((a, b) => (a.timestamp - b.timestamp));
    //console.log("333", this.state.events);
    this.setState({ events: events });
  }
  render() {
    //changeEndTimes()
    return (
      <div>
        <Header subject="Internet Safety" />
        <button onClick={this.loadSampleEvents}>Load sample events</button>
        <button onClick={this.changeEndTimes}>changeEndTimes</button>
        {Object.keys(this.state.events).map(key => <Event //to rethink why Ocject.keys
          event={this.state.events[key]}
          key={key}
          index={key}
          updateEvent={this.updateEvent}
          updateAllEvents={this.updateAllEvents}
        />)}
      </div>

    );
  }
}

export default App;
