import React, { Component } from 'react'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import Search from './Search'
import VideoPlayer from './VideoPlayer'
import VideoDetails from './VideoDetails'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  render() {
    return (
      <div className='container app'>
        <Search onSearch={this.onSearch} />
        <div className='row'>
          <div className='col'>
            <VideoPlayer />
            <VideoDetails />
          </div>
          <div className='col'>
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }

  onSearch = async queryText => {
    console.log(queryText)
    const response = await youtube.get('/search', {
      params: {
        q: queryText
      }
    })
    this.setState(() => ({
      videos: response.data.items
    }))
  }
}

export default App
