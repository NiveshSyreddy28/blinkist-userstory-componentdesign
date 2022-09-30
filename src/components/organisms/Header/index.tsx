import { Grid } from '@mui/material'
import React from 'react'
import Button from '../../atoms/Button'
import Explore from '../Explore'
import Typography from '../../atoms/Typography'
import Logo from '../../atoms/Logo'
import Avatar from '../../atoms/Avatar'

const Header = () => {
  return (
    <>
      <Grid container direction="row">
        <Logo/>
        <Button children='SearchIcon' variant='' onclick={()=>{}}/>
        <Explore/>
        <Typography children="My Library" variant="h3" />
        <Typography children="Highlights" variant="h3" />
        <Avatar src='user.png'/>
      </Grid>
    </>
  )
}

export default Header
