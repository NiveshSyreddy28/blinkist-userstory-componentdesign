import React from 'react'

interface IconProps {
  icon: any
}

const Icon = ({icon}: IconProps) => {
  return (
    <div>
      {icon}
    </div>
  )
}

export default Icon
