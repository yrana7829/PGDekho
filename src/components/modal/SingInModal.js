import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import LoginWithIds from './LoginWithIds';
import OtpModal from './OtpModal';
import { Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomMuiBtn from '../btn/CustomMuiBtn';
import ModalImages from './modalimages/ModalImages';

const SignInModal = ({ handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(true); // Added 'open' variable

  const handleSigninClose = () => {
    handleClose();
  };

  const handleSignIn = () => {
    // check if the phone number is valid
    if (!phoneNumberIsValid(phoneNumber)) {
      setError('Please enter a valid mobile number'); // Set the error message
      return; // Return early if phone number is not valid
    }

    console.log('Signing in with phone number:', phoneNumber);
    setShowOTPModal(true);
  };

  // Phone number validation code
  const phoneNumberIsValid = (number) => {
    return /^\d{10}$/.test(number); // Example: Validate if the number is exactly 10 digits
  };

  const handleVerifyOTP = () => {
    console.log('Verifying OTP:', otp);
    // Perform the necessary verification logic
    setShowOTPModal(false);
  };

  const handleOTPModalClose = () => {
    setShowOTPModal(false);
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
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <CustomMuiBtn onClick={handleClose}>
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
            <div
              className='singup-modal-sec2'
              style={{ width: '400px', marginTop: '-70px' }}
            >
              <div className='singup-modal-sec21'>
                Welcome Back!
                <div className='singup-modal-sec22'>
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies
                </div>
              </div>
              <div style={{ marginTop: '10%' }}>
                <input
                  type='text'
                  style={{ marginLeft: '5%' }}
                  className='form-control custom-input'
                  placeholder='Enter your phone number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {error && <div style={{ color: 'red' }}>{error}</div>}{' '}
              {/* Display error message if there's an error */}
              <div style={{ marginTop: '1rem' }}>
                <Button
                  className='singup-modal-sec23'
                  style={{ background: '#fa6e42', marginTop: '-5%' }}
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              </div>
              <div className='signModalBoder' style={{}}>
                <div className='signModalLoginWith'>Or Login With</div>
              </div>
              <div style={{ marginLeft: '10%', marginTop: '-10px' }}>
                <LoginWithIds />
              </div>
            </div>
          </Col>
        </Row>

        {showOTPModal && (
          <OtpModal
            handleClose={handleSigninClose}
            otphandleClose={handleOTPModalClose}
            handleVerifyOTP={handleVerifyOTP}
            otp={otp}
          />
        )}
      </Box>
    </Modal>
  );
};

export default SignInModal;
