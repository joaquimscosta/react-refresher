import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'debounce'

class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.onSearchDebounce = debounce(this.props.onSearch, 200)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='enter search text'
            onChange={this.onChange}
            value={this.state.term}
          />
        </div>
      </form>
    )
  }
  onChange = event => {
    event.persist()
    const term = event.target.value
    this.setState(() => ({ term }))
    if (term.length > 3) {
      this.onSearchDebounce(this.state.term)
    }
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.onSearch(this.state.term)
  }
}
export default Search
