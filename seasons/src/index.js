import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DisplaySeason from './SeasonDisplay'
import Spinner from './Spinner'

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      latitude: null,
      errorMessage: ''
    }
  }

  componentDidMount () {
    console.log('state=', this.state)
    window.navigator.geolocation.getCurrentPosition((pos) => {
      this.setState(() => ({
        latitude: pos.coords.latitude
      }))
    }, (err) => {
      console.error('error: ', err)
      this.setState(() => ({
        errorMessage: err.message
      }))
    }, options)
  }

  render () {
    console.log('rendering.... state=', this.state)
    if (!this.state.errorMessage && this.state.latitude) {
      return <DisplaySeason latitude={this.state.latitude} />
    }
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    return <Spinner message='Please accept location request' />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
