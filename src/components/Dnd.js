import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class Dnd extends React.Component {
  constructor(props) {
    super(props)
    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end }) {
    const { events } = this.props

    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.props.changeEvents(nextEvents)

    alert(`${event.title} was dropped onto ${event.start}`)
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.props

    const nextEvents = events.map(existingEvent => existingEvent.id == event.id
      ? { ...existingEvent, start, end }
      : existingEvent)

    this.props.changeEvents(nextEvents)

    alert(`${event.title} was resized to ${start}-${end}`)
  }

  render() {
    return (
      <DragAndDropCalendar
        showMultiDayTimes
        selectable
        events={this.props.events}
        onEventDrop={this.moveEvent}
        resizable
        views={['day', 'agenda']}
        scrollToTime={new Date(1970, 1, 1, 6)}
        onEventResize={this.resizeEvent}
        defaultView="day"
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={slotInfo =>
          alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
          )
        }
      />
    )
  }
}

export default DragDropContext(HTML5Backend)(Dnd)
