import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY = '{youtube_api_key}';

// Create  a new component
class App extends Component {

    constructor(props) {
        super(props)
        this.state = { videos: [] }

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos })
            console.log(videos)
            // this.setState({ videos: videos })
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

// Take this componet's generated HTML and put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));