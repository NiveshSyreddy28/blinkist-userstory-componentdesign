import React from 'react'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import ProgressBar from '../../atoms/ProgressBar';
import IconLabel from '../Iconlabel';

interface BookCardProps {
  bookImage : string;
  bookName : string;
  authorName : string;
  timeRead : string;
}

const BookCard = (props: BookCardProps) => {
  const {bookImage, bookName, authorName, timeRead} = props;
  return (
    <Card>
      <CardMedia
        component="img"
        image={bookImage}
        alt={bookName}
      />
      <CardContent>
        <Typography  variant="h5" children={bookName}/>
        <Typography variant="body2" children={authorName}/>
        <IconLabel icon={<Icon icon={<></>}/>} label = {timeRead}/>
        <ProgressBar/>
      </CardContent>

    </Card>
  )
}

export default BookCard
