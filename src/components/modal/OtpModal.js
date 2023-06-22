import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import signupimg from '../../assets/image/signupimg.png';

const OtpModal = ({ handleClose, handleVerifyOTP, otp, setOTP }) => {
  const handleOTPVerification = () => {
    console.log('Verifying OTP:', otp);
    handleVerifyOTP();
  };

  return (
    <Modal
      show={true}
      onHide={handleClose}
      centered
      style={{ marginTop: '3%' }}
    >
      <Modal.Header closeButton></Modal.Header>
      <div className='signUpModalBody' style={{ height: '500px' }}>
        <Row>
          <Col className='col-6'>
            <img src={signupimg} alt='Image' className='img-fluid' />
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
      </div>
    </Modal>
  );
};

export default OtpModal;
