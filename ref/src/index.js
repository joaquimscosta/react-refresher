import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import mapboxgl from 'mapbox-gl'

class App extends Component {
  constructor(props) {
    super(props)
    this.mapElement = null
    this.map = null
    mapboxgl.accessToken =
      'pk.eyJ1IjoianNjb3N0YSIsImEiOiJjanA4Z2lsOG0xNGJ5M3Fxc2RkYzNpNzN4In0.UPzA-uaw4leSdoQmCnAcSQ'
    this.state = {
      map: null
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    })
    this.setState(() => ({ map }))
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div
          ref={element => {
            this.mapElement = element
          }}
        />
        <div id='map' />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
