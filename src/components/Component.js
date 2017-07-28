import React from 'react'

require('../scss/style.scss');

class Component extends React.Component {

  constructor (props) {
    super(props)
  }


  render () {
    return (
        <h1>Hello, I´m a component</h1>
    )
  }
}

export default Component
