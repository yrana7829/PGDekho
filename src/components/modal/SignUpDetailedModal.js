import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import LocationDetailModal from './LocationDetailModal';
import { Modal, Box, Button as btn } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomMuiBtn from '../btn/CustomMuiBtn';
import ModalImages from './modalimages/ModalImages';

const SignUpDetailedModal = ({ handleClose }) => {
  const [profession, setProfession] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [LocationDetail, setLocationDetail] = useState(false);

  const [professionError, setProfessionError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [termsError, setTermsError] = useState('');

  const [currentModal, setcurrentModal] = useState(true);
  const [open, setOpen] = useState(true);

  const validateProfession = () => {
    if (profession.trim() === '') {
      setProfessionError('Please enter your profession.');
    } else {
      setProfessionError('');
    }
  };

  const locationHandler = () => {
    setLocationDetail(true);
    setcurrentModal(false);
  };

  const validateName = () => {
    if (name.trim() === '') {
      setNameError('Please enter your name.');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    if (email.trim() === '') {
      setEmailError('Please enter your email.');
    } else {
      setEmailError('');
    }
  };

  const validateNumber = () => {
    if (number.trim() === '') {
      setNumberError('Please enter your mobile number.');
    } else {
      setNumberError('');
    }
  };

  const validateTerms = () => {
    if (!termsChecked) {
      setTermsError('Please agree to the terms and conditions.');
    } else {
      setTermsError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateProfession();
    validateName();
    validateEmail();
    validateNumber();
    validateTerms();

    if (
      !professionError &&
      !nameError &&
      !emailError &&
      !numberError &&
      !termsError
    ) {
      console.log('Form submitted!');
      handleClose(); // Close the modal after successful submission
    }
  };

  const handleReset = () => {
    setProfession('');
    setName('');
    setEmail('');
    setNumber('');
    setTermsChecked(false);
  };

  const handleSkip = () => {
    handleClose(); // Close the modal without saving
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: 550,
    borderRadius: 6,
    overflow: 'hidden',
  };

  return (
    <>
      {currentModal && (
        <div>
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
              <Row className='' style={{ marginTop: '3%' }}>
                <Col className='Col-6 ' style={{ marginTop: '20px' }}>
                  <div
                    className=''
                    style={{ height: '500px', marginLeft: '2%' }}
                  >
                    <ModalImages />
                  </div>
                </Col>
                <Col className='col-6 mt-4'>
                  <div className='singup-modal-sec21'>
                    Let’s Know You Better
                    <div className='singup-modal-sec22'>
                      Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                      nunc lacus dolor ultricies
                    </div>
                  </div>
                  <Form
                    onSubmit={handleSubmit}
                    style={{ marginTop: '12%', marginLeft: '5%' }}
                  >
                    <Form.Group>
                      <Form.Label
                        style={{ marginTop: '2%', marginBottom: '-1%' }}
                      >
                        <h6>I am an</h6>
                      </Form.Label>
                      <div>
                        <Button
                          variant='secondary'
                          onClick={() => setProfession('Individual')}
                          active={profession === 'Individual'}
                          style={{
                            marginRight: '10px',
                            background: '#F5F4F8',
                            color: 'black',
                          }}
                        >
                          Individual
                        </Button>
                        <Button
                          variant='secondary'
                          onClick={() => setProfession('Agent')}
                          active={profession === 'Agent'}
                          style={{ marginLeft: '50px', background: '#fa6e42' }}
                        >
                          Agent
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label
                        style={{ marginTop: '2%', marginBottom: '-1%' }}
                      >
                        <h6>Your Name</h6>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={validateName}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label
                        style={{ marginTop: '2%', marginBottom: '-1%' }}
                      >
                        <h6>Email</h6>
                      </Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label
                        style={{ marginTop: '2%', marginBottom: '-1%' }}
                      >
                        <h6>Mobile Number</h6>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Your Number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        onBlur={validateNumber}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Check
                        type='checkbox'
                        label='I agree to the terms and conditions'
                        checked={termsChecked}
                        onChange={(e) => setTermsChecked(e.target.checked)}
                        onBlur={validateTerms}
                        style={{ marginTop: '' }}
                      />
                    </Form.Group>

                    <div className='text-center' style={{ marginTop: '5%' }}>
                      <Button
                        onClick={handleReset}
                        style={{
                          width: '25%',
                          marginTop: '0', // Set the common top margin here
                          color: '#090909',
                          background: ' none',
                          border: 'none',
                          marginLeft: '-10%',
                        }}
                      >
                        Reset All
                      </Button>
                      <Button
                        variant='primary'
                        onClick={handleSkip}
                        className='btn-button'
                        style={{ marginLeft: '7%', marginTop: '0' }} // Set the common top margin here
                      >
                        Skip
                      </Button>{' '}
                      <Button
                        className='btn-button'
                        style={{
                          marginLeft: '7%',
                          marginTop: '0',
                          width: '156px',
                        }} // Set the common top margin here
                        type='submit'
                        onClick={locationHandler}
                      >
                        Next
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Box>
          </Modal>
        </div>
      )}

      {LocationDetail && (
        <LocationDetailModal handleClose={handleClose} open={LocationDetail} />
      )}
    </>
  );
};

export default SignUpDetailedModal;
