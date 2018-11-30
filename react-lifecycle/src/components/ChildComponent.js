import React, { Component } from 'react'
import PropTypes from 'prop-types'
class ChildComponent extends Component {
    static propTypes = {
      name: PropTypes.string
    }
    static defaultProps = (function () {
      console.log('ChildComponent: defaultProps')
      return {}
    })()

    constructor (props) {
      super(props)
      console.log('ChildComponent: state')
      this.state = {
        name: 'Joaquim'
      }
    }
    // Any changes within 'state' here wont trigger rerender
    componentWillMount () {
      console.log('ChildComponent: componentWillMount')
    }
    // good place to update state with data coming from network request
    // will trigger rerender
    componentDidMount () {
      console.log('ChildComponent: componentDidMount')
    }
    componentWillUnmount () {
      console.log('ChildComponent: componentWillUnmount')
    }

    componentWillReceiveProps (nextProps) {
      console.log('ChildComponent: componentWillReceiveProps')
      console.log('nextProps:', nextProps)
    }
    shouldComponentUpdate (nextProps, nextState) {
      console.log('<ChildComponent/>: shouldComponentUpdate')
      console.log('nextProps:', nextProps)
      console.log('nextState:', nextState)
      return true
    }
    componentWillUpdate (previousProps, previousState) {
      console.log('<ChildComponent/>: componentWillUpdate')
      console.log('previousProps:', previousProps)
      console.log('previousState:', previousState)
      return true
    }
    componentDidUpdate (previousProps, previousState) {
      console.log('<ChildComponent/>: componentDidUpdate')
      console.log('previousProps:', previousProps)
      console.log('previousState:', previousState)
      return true
    }
    componentDidCatch (err, errorInfo) {
      console.log('componentDidCatch')
      console.error(err)
      console.error(errorInfo)
      this.setState(() => (
        { err, errorInfo }
      ))
    }

    render () {
      console.log('ChildComponent: render')
      if (this.state.oops) {
        throw new Error('Something went wrong')
      }
      return [
        <div key='name'> Name: {this.props.name} </div>
      ]
    }
}
export default ChildComponent
