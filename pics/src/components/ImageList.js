import React from 'react'
import PropTypes from 'prop-types'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = props => {
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ))

  return <div className="image-list">{images}</div>
}

ImageList.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageList
