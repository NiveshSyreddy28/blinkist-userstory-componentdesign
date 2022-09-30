import React from 'react'
import { Box, Grid, Modal, TextField } from '@material-ui/core'
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';

const KindlePopup = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddEmail = () => {}
  const handleNeedHelp = () => {}
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
        </Box>
      </Modal>
    </div>
  )
}

export default KindlePopup
