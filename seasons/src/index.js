import React from 'react'
import ReactDOM from 'react-dom'
import DisplaySeason from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'

const App = () => {
  const [lat, errorMessage] = useLocation()
  let content
  if (lat) {
    content = <DisplaySeason latitude={lat} />
  } else if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else {
    content = <Spinner message='Please accept location request' />
  }
  return content
}
ReactDOM.render(<App />, document.getElementById('root'))
