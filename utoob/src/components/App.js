import React, { Component } from 'react'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import Search from './Search'
import VideoDetails from './VideoDetails'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  render() {
    return (
      <div className="container app">
        <Search onSearch={this.onSearch} />
        <div className="row">
          <div className="col">
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="col">
            <VideoList
              videos={this.state.videos}
              onSelectVideo={this.onSelectVideo}
            />
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

  onSelectVideo = video => {
    this.setState(() => ({
      selectedVideo: video
    }))
  }
}

export default App
