import React, { Component } from 'react'

// const SearchBar = () =>{
//     return <input/>
// }

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
    }

    render() {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange} />
            </div>
        )
    }

    onInputChange=(event) => {
        console.log(event.target.value)
        this.setState({ term: event.target.value })
    }
}

export default SearchBar