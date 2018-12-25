import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '25px' }}>
        <SearchBar onSearch={this.handleSearch} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
  handleSearch = async text => {
    console.log('searching for ', text)
    const response = await unsplash.get('/search/photos', {
      params: { query: text }
    })
    this.setState(() => ({
      images: response.data.results
    }))
  }
}
export default App
