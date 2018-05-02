import React from 'react'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-big-calendar/lib/less/styles.less'
import { slide as Menu } from 'react-burger-menu'

import '../styles.less'
import '../prism.less'
import events from '../events'

import EventForm from './EventForm'
import Selectable from './Selectable'

localizer(globalize)

class App extends React.Component {
  state = {
    events,
    open: false,
    edit: {}
  }

  editVals = (event) => {

    this.setState({ open: true, edit: event })
    console.log(event)
  }
  addEvent = (slotInfo) => { console.log(slotInfo) }
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Menu isOpen={this.state.open} width="900px">
          <EventForm edit={this.state.edit} />
        </Menu>
        <Selectable
          events={this.state.events}
          editVals={this.editVals}
          addEvent={this.addEvent}
        />
      </div>
    );
  }
}

export default App;