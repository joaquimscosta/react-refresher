import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'english'
    }
  }
  onLanguageChange = language => {
    console.log('buttonclicked')
    this.setState(() => ({
      language
    }))
  }
  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag pt'
            onClick={() => this.onLanguageChange('portuguese')}
          />
          <ColorContext.Provider value='red'>
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    )
  }
}
export default App
