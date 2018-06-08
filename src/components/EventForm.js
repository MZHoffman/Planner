import React from 'react'

import { timestampToTime, fixUserInput } from '../functions'
import Input from './Input'

class EventForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { startHR, endHR, desc, title } = this.props.edit
    // console.log(start, this.props.edit)
    return (
      <div>
        <span>Edit/Add Event</span>
        <form className="grid-container">
          <Input className="grid-item1" type="text"
            value={startHR}
            // onBlur={this.fixUserInput(start, start)} // 
            placeholder="Start"
            name="start"
            validation
            handleChange={this.props.handleChange}
          />
          <Input className="grid-item2" type="text"
            value={endHR}
            placeholder="End"
            name="end"
            validation
            handleChange={this.props.handleChange}
          />
          <Input className="grid-item3" type="text"
            value={title}
            placeholder="Title"
            name="title"
            handleChange={this.props.handleChange}
          />
          <textarea className="grid-item4" type="text"
            value={desc}
            placeholder="Description"
            name="desc"
            onChange={this.props.handleChange}
          />
          <button className="grid-item5" type="submit">+ Add Event</button>
        </form>
      </div>
    );
  }
}

export default EventForm;