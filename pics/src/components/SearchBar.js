import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  render () {
    return (
      <div className='ui segment search-bar'>
        <form className='ui form' onSubmit={this.onSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input type='text' onChange={this.onTextChange} value={this.state.searchText} />
          </div>
        </form>
      </div>
    )
  }

    onSubmit = (event) => {
      event.preventDefault()
      console.log('entering handle submit, ', event)
      this.props.onSearch(this.state.searchText)
    }
    onTextChange = (event) => {
      console.log('searching, ', event)
      const text = event.target.value
      this.setState(() => ({ searchText: text }))
    }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar
