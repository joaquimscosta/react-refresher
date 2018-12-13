import React from 'react'
import PropTypes from 'prop-types'

const VideoDetails = props => {
  if (props.video) {
    const { title, description } = props.video.snippet
    return (
      <div
        class='card bg-light mb-3 video-details'
        style={{ maxWidth: '100%' }}
      >
        <div class='card-body'>
          <h5 class='card-title'>{title}</h5>
          <p class='card-text'>{description}</p>
        </div>
      </div>
    )
  }
  return null
}
VideoDetails.propTypes = {
  video: PropTypes.object
}

export default VideoDetails
