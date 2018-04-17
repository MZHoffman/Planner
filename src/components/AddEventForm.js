import React from 'react';
import { timeMath, timeToTimestamp, fixUserInput, timestampToTime } from '../functions'

class AddEventForm extends React.Component {
    createEvent = (event) => {
        event.preventDefault();
        let duration = timestampToTime(fixUserInput(this.duration.value))
        if (timeToTimestamp(this.props.lastEventEnd) + timeToTimestamp(duration) > 86340000) { duration = "00:00" }
        const end = timeMath(duration, this.props.lastEventEnd, "add")
        const newEvent = {
            name: this.name.value,
            duration,
            end,
            start: this.props.lastEventEnd,
            startTimeStamp: timeToTimestamp(this.props.lastEventEnd)
        }
        this.props.addEvent(newEvent);
        this.addForm.reset();
    }
    render() {
        return (
            <span>
                <form
                    ref={(input) => this.addForm = input}
                    type="submit"
                    onSubmit={(e) => this.createEvent(e)}
                >
                    <input
                        ref={(input) => this.name = input}
                        type="text" name="start"
                        defaultValue="Name" />
                    <input
                        ref={(input) => this.duration = input}
                        type="text" name="duration"
                        defaultValue="Duration" />
                    <button
                        onClick={this.handleAdd}>+ Add</button>
                </form>
            </span>
        )
    }
}

export default AddEventForm;