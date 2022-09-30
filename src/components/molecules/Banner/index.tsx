import React from 'react'
import Typography from '../../atoms/Typography';

interface BannerProps {
  src : string;
 }

const Banner = ({src} : BannerProps) => {
  return (
    <div style={{
      background: `url(${src})`
    }}>
    <Typography children='Which books should we blink next?' variant='h2' />
    </div>
  )
}

export default Banner
