import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import PropSearchModal from './PropSearchModal';
import CustomMuiBtn from '../btn/CustomMuiBtn';
import ModalImages from './modalimages/ModalImages';
import CloseIcon from '@mui/icons-material/Close';

const LocationDetailModal = ({ handleClose, open }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [nextModalVisible, setNextModalVisible] = useState(false);

  const validateName = () => {
    if (name.trim() === '') {
      setNameError('Please enter your name.');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateName();

    if (!nameError) {
      console.log('Form submitted!');
      setNextModalVisible(true);
    }
  };

  const handleReset = () => {
    setName('');
  };

  const handleSkip = () => {
    handleClose(); // Close the modal without saving
  };

  const handleNextModalClose = () => {
    setNextModalVisible(false);
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
    height: 500,
    borderRadius: 6,
    overflow: 'hidden',
  };
  return (
    <>
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
            <Col className='col-6'>
              <div className='singup-modal-sec21'>
                Your Are Looking To Buy In
                <div className='singup-modal-sec22'>
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies
                </div>
              </div>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: '15%', marginLeft: '5%' }}
              >
                <Form.Group>
                  <Form.Label style={{ marginTop: '2%' }}>
                    <h6>Enter Location</h6>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter a locality or project/society'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={validateName}
                    style={{ height: '56.84px' }}
                  />
                  {nameError && (
                    <div className='error-message'>{nameError}</div>
                  )}
                </Form.Group>
                <div>
                  <span className='location-1'>
                    Gurugram, Haryana
                    <FaTimes />
                  </span>
                  <span className='location-1' style={{ marginLeft: '19%' }}>
                    Gurugram, Haryana
                    <FaTimes />
                  </span>
                </div>
                <div className='localities'>
                  <h6>Popular Localities in New Delhi</h6>
                  <ul
                    style={{
                      listStyleType: 'none',
                      padding: 0,
                      fontFamily: 'Montserrat',
                    }}
                  >
                    <li
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '400',
                      }}
                    >
                      Gurugram Sector -22
                    </li>
                    <li
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '400',
                      }}
                    >
                      Gurugram Sector - 44,
                    </li>
                    <li
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '400',
                      }}
                    >
                      Gurugram Sector - 23,{' '}
                    </li>
                  </ul>
                </div>
                <div className='text-center' style={{ marginTop: '48%' }}>
                  <Button
                    onClick={handleReset}
                    style={{
                      width: '20%',
                      marginTop: '0', // Set the common top margin here
                      color: '#090909',
                      background: ' none',
                      border: 'none',
                      marginLeft: '10%',
                    }}
                  >
                    Reset All
                  </Button>{' '}
                  <Button
                    className='btn-button'
                    style={{
                      marginLeft: '15%',
                      marginTop: '0',
                      width: '156px',
                    }}
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Box>
      </Modal>
      {nextModalVisible && (
        <PropSearchModal
          handleClose={handleNextModalClose}
          open={nextModalVisible}
        />
      )}
    </>
  );
};

export default LocationDetailModal;
