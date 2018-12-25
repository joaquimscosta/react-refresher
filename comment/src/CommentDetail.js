import React from 'react'
import PropTypes from 'prop-types'

const CommentDetail = props => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
      </div>
      <div className='metadata'>
        <span>{props.time}</span>
        <div className='text'>{props.text}</div>
      </div>
    </div>
  )
}

CommentDetail.propTypes = {
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired
}

export default CommentDetail
