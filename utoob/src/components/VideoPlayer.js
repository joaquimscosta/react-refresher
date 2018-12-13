import React from 'react'
const VideoPlayer = props => {
  return (
    <div className='video-player'>
      {props.video && (
        <iframe
          id='ytplayer'
          type='text/html'
          width='640'
          height='360'
          title='video player'
          src={`https://www.youtube.com/embed/${
            props.video.id.videoId
          }?autoplay=1`}
          frameBorder='0'
        />
      )}
    </div>
  )
}

export default VideoPlayer
