import React from 'react'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-big-calendar/lib/less/styles.less'

import '../styles.less'
import '../prism.less'
import events from '../events'

import Dnd from './Dnd'

localizer(globalize)

class App extends React.Component {
  state = {
    events
  }
  changeEvents = (newEvents) => {
    this.setState({
      events: newEvents,
    })
  }
  render() {
    return (
      <div>
        <Dnd
          events={this.state.events}
          changeEvents={this.changeEvents}
        />
      </div>
    );
  }
}

export default App;