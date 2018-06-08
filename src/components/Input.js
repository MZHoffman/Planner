import React, { Component } from 'react'

class Input extends Component {// eslint-disable-line react/prefer-stateless-function
    // nameHR = React.createRef();
    handleChange = (event) => {
        console.log(event.target.value)
        const len = event.target.value.length
        console.log(len)
        if (event.currentTarget.value.match(/(^[0-1][0-9]:[0-5]$)|(^[0-9]:[0-5][0-9]$)|(^[2][0-3]:[0-5]$)/g)) {
            console.log(event.currentTarget.value.match(/(^[0-1][0-9]:[0-5]$)|(^[0-9]:[0-5][0-9]$)|(^[2][0-3]:[0-5]$)/), "sadd")
        }
        // console.log(-1, event.currentTarget.value.length, this.props.value.toString().length)
        /*         if (this.props.validation) {
                } */
        /* if (
            event.currentTarget.value.slice(-1).match(/[0-9]|a|A|p|P|m|M|:|\./)
            // || event.currentTarget.value.length < this.props.value.toString().length
        ) {
            console.log(0, event.currentTarget.value)
            this.props.handleChange(event)
        }
        console.log(4, event.currentTarget.value.slice(-1).match(/[0-9]|a|A|p|P|m|M|:|\./)) */
        // (/[0-2]?\d[:.]?\d{2}(am|pm)$/.test(event.currentTarget.value))

    }
    render() {
        return (
            <input
                type="text"
                className={this.props.className}
                value={this.props.value}
                placeholder={this.props.placeholder}
                // ref={this.nameHR}
                name={this.props.name}
                onChange={this.handleChange} // interal function for validation
            />

        )
    }
}
// regex notes
// (^[0-1][0-9]$)|([0-9]:)|([2][0-3])$ //2 chars
// (^[0-1][0-9]:$)|(^[0-9]:[0-5]$)|(^[2][0-3]:$)
// (^[0-1][0-9]:[0-5]$)|(^[0-9]:[0-5][0-9]$)|(^[2][0-3]:[0-5]$)

export default Input

