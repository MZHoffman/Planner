import React from 'react';
import Header from './Header';
import Event from './Event';
import sampleEvents from '../sample-events';

class App extends React.Component {
  state = {
    events: []
  }

  sortByTime = (events) => {
    return events.sort((a, b) => (a.timestamp - b.timestamp));
  }

  loadSampleEvents = () => {
    console.log(sampleEvents)
    const sortedEvents = this.sortByTime(sampleEvents); //why it doesnt work?
    this.setState({ events: sortedEvents });
  }

  updateEvent = (key, updatedEvent) => {
    // console.log(this.state.events);
    const events = [...this.state.events];
    events[key] = updatedEvent;
    events.sort((a, b) => (a.timestamp - b.timestamp));
    this.setState({ events });
    // console.log(events);
  }
  tidyUpTime = (key, transformedTime) => {
    const events = [...this.state.events];
    events[key] = transformedTime;
    this.setState({ events });
    () => this.sortByTime;
  }

  render() {
    this.sortByTime(this.state.events)
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
