import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class App extends React.Component {
  state = {
    events: [
      {
        id: 0, start: new Date(2018, 4, 18, 10, 0, 0), end: new Date(2018, 4, 18, 11, 3, 0), duration: '01:00', timestamp: 43200000, title: 'Speech 1',
      },
      {
        id: 1, start: new Date(2018, 4, 18, 11, 0, 0), end: new Date(2018, 4, 18, 12, 3, 0), duration: '01:00', timestamp: 39600000, title: 'Speech',
      },
      {
        id: 2, start: new Date(2018, 4, 18, 12, 0, 0), end: new Date(2018, 4, 18, 13, 3, 0), duration: '01:00', timestamp: 36000000, title: 'Lunch',
      },
      {
        id: 3, start: new Date(2018, 4, 18, 8, 0, 0), end: new Date(2018, 4, 18, 9, 3, 0), duration: '01:00', timestamp: 28800000, title: 'Begining',
      },
      {
        id: 4, start: new Date(2018, 4, 18, 13, 0, 0), end: new Date(2018, 4, 18, 14, 3, 0), duration: '01:00', timestamp: 46800000, title: 'Speech',
      },
      {
        id: 5, start: new Date(2018, 4, 18, 14, 0, 0), end: new Date(2018, 4, 18, 15, 3, 0), duration: '01:00', timestamp: 50400000, title: 'Speech',
      },
      {
        id: 6, start: new Date(2018, 4, 18, 15, 0, 0), end: new Date(2018, 4, 18, 16, 3, 0), duration: '01:00', timestamp: 54000000, title: 'Networking',
      },
      {
        id: 7, start: new Date(2018, 4, 18, 16, 0, 0), end: new Date(2018, 4, 18, 17, 3, 0), duration: '01:00', timestamp: 57600000, title: 'End',
      },
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


  // Updates all events in the array after the one we have changed



  render() {
    return (
      <div>
        <BigCalendar
          events={this.state.events}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    );
  }
}

export default App;