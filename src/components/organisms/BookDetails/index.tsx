import React from 'react'
import { Grid } from '@mui/material'
import BookThumbnail from '../../atoms/BookThumbnail'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import IconLabel from '../../molecules/Iconlabel'
import Tabs from '../Tabs'

const BookDetails = () => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item>
          <Typography children='Book Name' variant="h2"/>
          <Typography children='Description' variant="h3"/>
          <Typography children="Author Name" variant='h3'/>
          <IconLabel icon={<Icon icon={<></>}/>} label='time'/>
          <Button children='Read Now' variant="contained" onclick={()=>{}}/>
          <Button children='Buy Book' variant="outlined" onclick={()=>{}}/>
          <Button children='Send to Kindle' variant="" onclick={()=>{}}/>
          <Tabs />
        </Grid>
        <Grid item>
          <BookThumbnail src='book.png'/>
        </Grid>
      </Grid>
    </div>
  )
}

export default BookDetails
