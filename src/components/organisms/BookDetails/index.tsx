import React, { useState } from 'react'
import { Grid } from '@mui/material'
import BookThumbnail from '../../atoms/BookThumbnail'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import IconLabel from '../../molecules/Iconlabel'
import Tabs from '../Tabs'
import KindlePopup from '../KindlePopUp'

interface BookDetailsProps {
  bookName : string;
  description : string;
  authorName : string;
}

const BookDetails = (props: BookDetailsProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const handleReadNow =() => {

  }
  const handleBuyBook =() => {

  }
  const handleSendToKindle =() => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
    {
      open &&
      <KindlePopup handleClose={handleClose} open={open}/>
    }
      <Grid container direction="row">
        <Grid item>
          <Typography children={props.bookName} variant="h2"/>
          <Typography children={props.description} variant="h3"/>
          <Typography children={props.authorName} variant='h3'/>
          <IconLabel icon={<Icon icon={<></>}/>} label='time'/>
          <Button children='Read Now' variant="contained" onclick={handleReadNow}/>
          <Button children='Buy Book' variant="outlined" onclick={handleBuyBook}/>
          <Button children='Send to Kindle' variant="" onclick={handleSendToKindle}/>
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
