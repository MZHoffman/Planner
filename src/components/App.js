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
  tidyUpTime = (key, transformedTime, fieldName) => {
    const events = [...this.state.events];
    events[key] = transformedTime;
    events.sort((a, b) => (a.timestamp - b.timestamp));
    if (fieldName === "end") {
      events.map(e => (e.duration = timeMath(e.end, e.start, "sub")))
    }
    events.map(e => (e.end = timeMath(e.start, e.duration, "add")))

    this.setState({ events });
  }
  render() {
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
