import React, { useState } from 'react';
import {
  Form,
  Row,
  Col,
  Image,
  Button,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import img from '../../../assets/image//profile.jpg';
import './PersnolDetail.css';
// import Footer from '../components/footer/Footer';

const PersnolDetail = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, phoneNumber, gender });
  };

  return (
    <div className='persnoladetail'>
      <Form onSubmit={handleSubmit}>
        <Row className='justify-content-center'>
          <Col xs={10} sm={8} md={6} lg={12}>
            <div className='per-outer-circle'>
              <div className='per-inner-circle'>
                <Image src={img} alt='Profile Image' roundedCircle />
              </div>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={10} sm={8} md={6} lg={12}>
            <FormGroup>
              <Form.Label className='input-texts'>Name:</Form.Label>
              <FormControl
                className='input-container'
                type='text'
                id='name'
                placeholder='Name'
                value={name}
                onChange={handleNameChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={10} sm={8} md={6} lg={12}>
            <Form.Group controlId='phoneNumber'>
              <Form.Label className='input-texts' style={{ marginTop: '5%' }}>
                Phone Number
              </Form.Label>
              <Form.Control
                className='input-container'
                type='tel'
                placeholder='Enter Your Number'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={10} sm={8} md={6} lg={12}>
            <Form.Group className='per-gender'>
              <Form.Label
                className='input-texts'
                style={{ marginTop: '5%', marginBottom: '2%' }}
              >
                Gender
              </Form.Label>
              <Row className='Gender-type'>
                <Col>
                  <Button
                    type='radio'
                    id='genderMale'
                    name='gender'
                    value='male'
                    label='Male'
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                    className='prop-btn'
                    style={{ width: '130.44px' }}
                  >
                    Male
                  </Button>
                </Col>
                <Col>
                  <Button
                    name='gender'
                    value='female'
                    label='Female'
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                    className='prop-btn'
                    style={{ width: '130.44px' }}
                  >
                    Female
                  </Button>
                </Col>
                <Col>
                  <Button
                    name='gender'
                    value='other'
                    checked={gender === 'other'}
                    onChange={handleGenderChange}
                    className='prop-btn'
                    style={{ width: '130.44px' }}
                  >
                    Other
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={10} sm={8} md={6} lg={12}>
            <Button
              type='submit'
              className='btn-button'
              style={{
                width: '100%',
                marginTop: '2rem',
                background: '#fa6e42',
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PersnolDetail;
