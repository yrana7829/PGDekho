import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Box, Modal, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomMuiBtn from '../btn/CustomMuiBtn';
import CheckOutModal from './CheckoutModal';

const DetailFormModal = () => {
  const [profession, setProfession] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [checkoutModal, setcheckoutModal] = useState(false);

  const [professionError, setProfessionError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [termsError, setTermsError] = useState('');

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setcheckoutModal(true);
  };

  const validateProfession = () => {
    if (profession.trim() === '') {
      setProfessionError('Please enter your profession.');
    } else {
      setProfessionError('');
    }
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: {
      xs: 300,
      sm: 400,
      md: 500,
      lg: 600,
      xl: 555,
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: 600,
    borderRadius: 6,
    overflow: 'hidden',
  };
  return (
    <>
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <CustomMuiBtn onClick={handleClose}>
              <CloseIcon style={{ fontSize: '15px' }} />
            </CustomMuiBtn>
            <Row
              className=''
              style={{
                marginTop: '3%',
                marginLeft: '0px',
              }}
            >
              <Col className='col-12 '>
                <div
                  className='mx-2 px-4 w-80'
                  style={{
                    marginTop: '4%',
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    fontSize: '25px',
                  }}
                >
                  Enter Your Details
                  <div
                    className=' w-80'
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '16px',
                      opacity: '50%',
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                    nunc lacus dolor ultricies
                  </div>
                </div>
                <Form onSubmit={handleSubmit} style={{ marginLeft: '5%' }}>
                  <Form.Group>
                    <Form.Label style={{ marginTop: '1%' }}>
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
                      style={{ marginBottom: '-2%', marginTop: '2%' }}
                    >
                      <h6>Your Name</h6>
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Your Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={validateName}
                      style={{ height: '50px', width: '90%' }}
                    />
                    {nameError && <div className='error'>{nameError}</div>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label
                      style={{ marginBottom: '-2%', marginTop: '2%' }}
                    >
                      <h6>Email</h6>
                    </Form.Label>
                    <Form.Control
                      style={{ height: '50px', width: '90%' }}
                      type='email'
                      placeholder='Enter Your Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={validateEmail}
                    />
                    {emailError && <div className='error'>{emailError}</div>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label
                      style={{ marginBottom: '-2%', marginTop: '2%' }}
                    >
                      <h6>Mobile Number</h6>
                    </Form.Label>
                    <Form.Control
                      style={{ height: '50px', width: '90%' }}
                      type='text'
                      placeholder='Enter Your Number'
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      onBlur={validateNumber}
                    />
                    {numberError && <div className='error'>{numberError}</div>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Check
                      style={{ marginTop: '3%' }}
                      type='checkbox'
                      label='I agree to the terms and conditions'
                      checked={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)}
                      onBlur={validateTerms}
                    />
                    {termsError && <div className='error'>{termsError}</div>}
                  </Form.Group>

                  <div
                    className=''
                    style={{
                      marginTop: '7%',
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      marginLeft: '-5%',
                    }}
                  >
                    <Button
                      className='btn-button'
                      style={{
                        width: '90%',
                        color: 'rgba(255, 255, 255, 1)',
                        background: 'rgba(250, 110, 66, 1)',
                      }}
                      type='submit'
                      onClick={handleClose}
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
      {checkoutModal && (
        <CheckOutModal handleClose={handleClose} open={checkoutModal} />
      )}
    </>
  );
};

export default DetailFormModal;
