import React from 'react'
import PropTypes from 'prop-types'
import './VideoItem.css'
const VideoItem = props => {
  const { title, thumbnails } = props.video.snippet
  return (
    <div
      class='video-item card border-light'
      onClick={() => props.onSelectVideo(props.video)}
    >
      <img
        className='card-img-right'
        src={thumbnails['default'].url}
        alt={title}
      />
      <div class='card-body text-dark'>
        <h5 class='card-title'>{title}</h5>
      </div>
    </div>
  )
}
VideoItem.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoItem
