import React, { useState } from 'react';
import { Button, Box, Typography, Modal, TextField } from '@mui/material';
import RatingComponent from '../../rating/Rating';
import CloseIcon from '@mui/icons-material/Close';

const RatingModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',

            transform: 'translate(-50%, -50%)',
            maxWidth: '800px',
            width: '100%',
            height: '500px',
            p: 4,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <Button
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              borderRadius: '50%',
              minWidth: '0',
              width: '22px',
              height: '22px',
              padding: '0',
              border: '1px solid grey',
              color: 'gray',
            }}
            onClick={handleClose}
          >
            <CloseIcon style={{ fontSize: '15px' }} />
          </Button>
          <Typography variant='h6' component='h2' id='modal-modal-title'>
            Give us a rating
          </Typography>
          <RatingComponent />
          <TextField
            id='comment'
            label='Leave a comment'
            multiline
            rows={8}
            variant='outlined'
            sx={{ mt: 12, width: '100%' }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default RatingModal;
