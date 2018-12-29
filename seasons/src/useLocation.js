import { useState, useEffect } from 'react'

export default () => {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      pos => setLat(pos.coords.latitude),
      err => setErrorMessage(err.message),
      options
    )
  }, [])
  return [lat, errorMessage]
}

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
}
