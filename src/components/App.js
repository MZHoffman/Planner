import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

import '../styles.less'
import '../prism.less'
import events from '../events'

import EventForm from './EventForm'
import Selectable from './Selectable'
import { timestampToTime } from '../functions'

localizer(globalize)

class App extends React.Component {
  state = {
    events,
    event: { // change name to be descriptive
      desc: "Enter Description",
      end: new Date(2015, 4, 12, 0, 0, 0),
      endHR: "00:00",
      start: new Date(2015, 4, 12, 0, 0, 0),
      startHR: "00:00",
      title: "Event Titile"
    }
  }
  editEvent = (event) => {
    const startHR = timestampToTime(Date.parse(event.start))
    const endHR = timestampToTime(Date.parse(event.end))
    this.setState({ event: { ...event, endHR, startHR } })
  }
  handleChange = ({ target }) => {
    console.log(target)
    toast(target);
    const { value, name } = target
    const event = { ...this.state.event }
    event[name] = value
    this.setState({ event })
  }
  render() {
    return (
      <div>
        <EventForm
          isOpen={this.state.open}
          edit={this.state.event}
          newEvent={this.newEvent}
          handleChange={this.handleChange} // why i dont tha to pass event here?
        />
        <Selectable
          events={this.state.events}
          editEvent={this.editEvent}
          addEvent={this.addEvent}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;