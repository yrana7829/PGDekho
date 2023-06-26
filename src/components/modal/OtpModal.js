import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModalImages from './modalimages/ModalImages';
import CustomMuiBtn from '../btn/CustomMuiBtn';

const OtpModal = ({
  otphandleClose,
  handleVerifyOTP,
  otp,
  setOTP,
  handleClose,
}) => {
  const [open, setOpen] = useState(true);

  const handleOTPVerification = () => {
    console.log('Verifying OTP:', otp);
    handleVerifyOTP();
    handleClose();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 862,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: 520,
    borderRadius: 6,
    overflow: 'hidden',
  };
  return (
    <Modal
      open={open}
      onClose={otphandleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <CustomMuiBtn onClick={otphandleClose}>
          <CloseIcon style={{ fontSize: '15px' }} />
        </CustomMuiBtn>

        <Row className='mt-4'>
          <Col className='Col-6 bshadow'>
            <div className='bshadow' style={{}}>
              {' '}
              <ModalImages />
            </div>
          </Col>
          <Col className='col-6 signUpSec2 d-flex justify-content-center align-items-center'>
            <div className='singup-modal-sec2' style={{ width: '400px' }}>
              <div className='singup-modal-sec21'>
                OTP Verification
                <div className='singup-modal-sec22'>
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies
                </div>
              </div>

              <Row>
                <Col className='col-3'>
                  <input
                    type='text'
                    className='form-control custom-input-otp'
                    placeholder=''
                    maxLength='1'
                    value={otp.charAt(0)}
                    onChange={(e) => setOTP(e.target.value + otp.slice(1, 4))}
                  />
                </Col>
                <Col className='col-3'>
                  <input
                    type='text'
                    className='form-control custom-input-otp'
                    placeholder=''
                    maxLength='1'
                    value={otp.charAt(1)}
                    onChange={(e) =>
                      setOTP(otp.charAt(0) + e.target.value + otp.slice(2, 4))
                    }
                  />
                </Col>
                <Col className='col-3'>
                  <input
                    type='text'
                    className='form-control custom-input-otp'
                    placeholder=''
                    maxLength='1'
                    value={otp.charAt(2)}
                    onChange={(e) =>
                      setOTP(otp.slice(0, 2) + e.target.value + otp.charAt(3))
                    }
                  />
                </Col>
                <Col className='col-3'>
                  <input
                    type='text'
                    className='form-control custom-input-otp'
                    placeholder=''
                    maxLength='1'
                    value={otp.charAt(3)}
                    onChange={(e) => setOTP(otp.slice(0, 3) + e.target.value)}
                  />
                </Col>
              </Row>

              <div style={{ marginTop: '1rem' }}>
                <Button
                  className='singup-modal-sec23'
                  style={{ background: '#fa6e42', marginTop: '2%' }}
                  onClick={handleOTPVerification}
                >
                  Verify OTP
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Box>
    </Modal>
  );
};

export default OtpModal;
