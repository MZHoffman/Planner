import React from 'react'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { timestampToTime } from '../functions'

import '../styles.less'
import '../prism.less'


class EventForm extends React.Component {
  render() {
    return (
      <div>
        <span>Edit/Add Event</span>
        <form>
          <input value={timestampToTime(Date.parse(this.props.edit.start))} type="text" placeholder="Start" />
          <input type="text" placeholder="End" />
          <input type="text" placeholder="Title" />
          <textarea type="text" placeholder="Description" />
          <button type="submit">+ Add Event</button>
        </form>
      </div>
    );
  }
}

export default EventForm;