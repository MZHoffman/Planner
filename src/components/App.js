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

import Selectable from './Selectable'

localizer(globalize)

class App extends React.Component {
  state = {
    events,
    open: false
  }
  // changeEvents = (newEvents) => {
  //   console.log('aaa')
  //   this.setState({
  //     events: newEvents,
  //   })
  // }
  editVals = (event) => {
    this.setState({ open: true })
    console.log(event)
  }
  addEvent = (slotInfo) => { console.log(slotInfo) }
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Menu isOpen={this.state.open}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
        <Selectable
          // events={this.state.events}
          editVals={this.editVals}
          addEvent={this.addEvent}
        // changeEvents={this.changeEvents}
        />
      </div>
    );
  }
}

export default App;