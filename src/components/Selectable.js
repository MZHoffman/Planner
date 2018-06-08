import React from 'react'
import BigCalendar from 'react-big-calendar'

const Selectable = (props) => (
  <React.Fragment>
    <BigCalendar
      selectable
      events={props.events}
      defaultView="day"
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={new Date(2015, 3, 12)}
      onSelectEvent={(event) => (props.editEvent(event))}
      onSelectSlot={slotInfo => (props.addEvent(slotInfo))}
    />
  </React.Fragment>
)

export default Selectable
