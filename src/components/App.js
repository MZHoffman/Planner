import React from 'react'
import Header from './Header'
import Event from './Event'
import sampleEvents from '../sample-events'
import { timeMath, fixUserInput } from '../functions'

class App extends React.Component {
  state = {
    events: []
  }

  loadSampleEvents = () => {
    sampleEvents.sort((a, b) => a.timestamp - b.timestamp)
    this.setState({ events: sampleEvents })
  }

  updateEvent = (key, updatedEvent) => {
    const events = [...this.state.events]
    events[key] = updatedEvent
    this.setState({ events })
  }

  tidyUpTime = (key, transformedTime) => {
    // console.log(fieldName, key, transformedTime);
    console.log(key, transformedTime)
    console.log('000', this.state.events)
    const events = [...this.state.events]
    console.log('111', events)
    events[key] = transformedTime
    console.log('222', events)
    // events.sort((a, b) => (a.timestamp - b.timestamp));
    console.log('333', events)
    events.map(e => (e.end = timeMath(e.start, e.duration, 'add')))
    events.map((e, key) => {
      // let prev = event.start;
      if (this.state.events[key - 1]) {
        e.start = this.state.events[key - 1].end
        // console.log()
        console.log(e.start)
      }
    })
    console.log(events)
    // events.reduce((events, event, key) => {
    // console.log(event.start, "reduce");
    // let prev = event.start
    // if (this.state.events[key - 1]) { prev = this.state.events[key - 1].end }
    // console.log(events, "events reduce");
    // console.log(prev, "events reduce");
    // event.start = prev
    // return events;
    // }, [])
    // console.log(events);
    // console.log(events, "outside");

    this.setState({ events })
  }
  render() {
    console.log('render', this.state.events)
    return (
      <div>
        <Header subject='Internet Safety' />
        <button onClick={this.loadSampleEvents}>Load sample events</button>
        <button onClick={this.sortByTime}>sort</button>
        {Object.keys(this.state.events).map(key => (
          <Event // to rethink why Ocject.keys
            event={this.state.events[key]}
            key={key}
            index={key}
            updateEvent={this.updateEvent}
            tidyUpTime={this.tidyUpTime}
          />
        ))}
      </div>
    )
  }
}
export default App
