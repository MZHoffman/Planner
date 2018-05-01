import React from 'react'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-big-calendar/lib/less/styles.less'

import '../styles.less'
import '../prism.less'
// import events from '../events'


localizer(globalize)

class Form extends React.Component {
  render() {
    return (
      <div>
        <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
          <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
          <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    );
  }
}

export default Form;