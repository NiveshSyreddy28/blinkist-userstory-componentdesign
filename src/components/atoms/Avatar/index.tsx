import React from 'react'
import MuiAvatar from '@mui/material/Avatar';
import Icon from '../Icon/index';
import { IconButton } from '@mui/material';

interface AvatarProps {
  src: string;
}

const Avatar = ({src}: AvatarProps) => {
  return (
    <div>
      <MuiAvatar src={src} />
      <Icon icon={<IconButton/>}/>
    </div>
  )
}

export default Avatar
