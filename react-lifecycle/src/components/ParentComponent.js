import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  static defaultProps = (function() {
    console.log('ParentComponent: defaultProps')
    return {
      true: false
    }
  })()
  componentWillMount() {
    console.log('ParentComponent: componentWillMount')
  }
  componentDidMount() {
    console.log('ParentComponent: componentDidMount')
  }
  componentWillUnmount() {
    console.log('ParentComponent: componentWillUnmount')
  }

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(event) {
    const text = event.target.value
    this.setState(() => ({
      text: text
    }))
  }
  render() {
    console.log('ParentComponent: render')
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
      <input
        key="input"
        value={this.state.text}
        onChange={this.onInputChange}
      />,
      <ChildComponent key="ChildComponent" name={this.state.text} />
    ]
  }
}
export default ParentComponent
