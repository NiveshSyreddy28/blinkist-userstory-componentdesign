import React from 'react'

interface BookThumbnailProps {
  src : string;
}

const BookThumbnail = ({src}: BookThumbnailProps) => {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  )
}

export default BookThumbnail
