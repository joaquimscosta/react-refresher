import React from 'react'
import PropTypes from 'prop-types'

const ImageList = (props) => {
  const images = props.images.map(({ urls, id, description }) =>
    <img src={urls.thumb} key={id} alt={description} />
  )

  return <div className='image-list'>{images}</div>
}

ImageList.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageList
