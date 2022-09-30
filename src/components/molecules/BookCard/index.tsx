import React from 'react'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import ProgressBar from '../../atoms/ProgressBar';
import IconLabel from '../Iconlabel';

const BookCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={"book Image"}
        alt="book name"
      />
      <CardContent>
        <Typography  variant="h5" children="Book Title"/>
        <Typography variant="body2" children="Author name"/>
        <IconLabel icon={<Icon icon={<></>}/>} label = "15 min"/>
        <ProgressBar/>
      </CardContent>

    </Card>
  )
}

export default BookCard
