import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { Button, Col } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close';
import CustomMuiBtn from '../btn/CustomMuiBtn';
import img from '../../../src/assets/image/checkOut.jpg';

const CheckOutModal = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: {
      xs: 300,
      sm: 350,
      md: 400,
      lg: 500,
      xl: 623,
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: 600,
    borderRadius: 6,
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '250px',
  };

  return (
    <>
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <CustomMuiBtn onClick={handleClose}>
              <CloseIcon style={{ fontSize: '15px' }} />
            </CustomMuiBtn>
            <Col
              className='col-12 my-5'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={img} alt='checkout' style={imageStyle} />
            </Col>
            <Col>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <h2>Successful</h2>
              </div>
            </Col>

            <Col>
              <div
                className='px-5'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  opacity: '0.5',
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies imperdiet ullamcorper mauris.
                </p>
              </div>
            </Col>

            <Col>
              <div
                className=''
                style={{
                  marginTop: '2%',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Button
                  className='btn-button'
                  style={{
                    width: '80%',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(250, 110, 66, 1)',
                  }}
                  type='submit'
                  onClick={handleClose}
                >
                  Next
                </Button>
              </div>
            </Col>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CheckOutModal;
