import React from 'react'
import PropTypes from 'prop-types'
import VideoItem from './VideoItem'
const VideoList = props => {
  const videos = props.videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onSelectVideo={props.onSelectVideo}
    />
  ))
  return <div className='video-list'>{videos}</div>
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onSelectVideo: PropTypes.func.isRequired
}
export default VideoList
