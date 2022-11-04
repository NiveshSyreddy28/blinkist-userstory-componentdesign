import { Grid } from '@mui/material';
import React from 'react'
import Typography from '../../atoms/Typography';

interface IconLabelProps {
  label : string;
  icon : React.ReactNode
}

const IconLabel = (props: IconLabelProps) => {
  const {icon, label} = props;
  return (
    <div>
      <Grid container direction='row'>
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
        <Typography children={label} variant='h3'/>
        </Grid>
      </Grid>
    </div>
  )
}

export default IconLabel
