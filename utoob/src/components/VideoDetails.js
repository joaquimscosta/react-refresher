import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from './VideoPlayer'

const VideoDetails = props => {
  if (props.video) {
    const { title, description } = props.video.snippet
    return (
      <div>
        <VideoPlayer video={props.video} />
        <div
          className='card bg-light mb-3 video-details'
          style={{ maxWidth: '100%' }}
        >
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>
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
