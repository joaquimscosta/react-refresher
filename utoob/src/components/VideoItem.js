import React from 'react'
import './VideoItem.css'
const VideoItem = props => {
  const { title, thumbnails } = props.video.snippet
  console.log('thumbnails=', thumbnails)
  return (
    <div className='video-item card'>
      <img
        className='card-img-right'
        src={thumbnails['default'].url}
        alt={title}
      />
      <div className='card-body'>
        <p className='card-text'>{title}</p>
      </div>
    </div>
  )
}
export default VideoItem
