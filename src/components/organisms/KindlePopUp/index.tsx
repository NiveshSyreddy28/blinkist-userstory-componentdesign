import React from 'react'
import { Box, Grid, Modal, TextField } from '@material-ui/core'
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';

interface KindlePopUpProps {
  open : boolean;
  handleClose : () => void;
}

const KindlePopup = (props: KindlePopUpProps) => {
  const{open, handleClose} = props;

  const handleAddEmail = () => {

  }
  const handleNeedHelp = () => {

  }
  return (
    <div>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <Box>
        <Typography children='Set up your Kindle' variant='h1'/>
          <Typography children='Send blinks right to your Kindle from within the app' variant='h1'/>
          <Grid container direction="row">
              <TextField placeholder='email'/>
              <TextField placeholder='@kindle.com'/>
          </Grid>
          <Button children='Add email' onclick={handleAddEmail} variant="contained"/>
          <Button children='Need help?' onclick={handleNeedHelp} variant="outlined"/>
          <Button children='Continue Reading' variant='contained' onclick={()=>{}}/>
        </Box>
      </Modal>
    </div>
  )
}

export default KindlePopup
