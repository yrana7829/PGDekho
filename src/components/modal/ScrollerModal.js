import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Modal, Box } from '@mui/material';

import PriceScroller from './PriceScroller';

import CustomMuiBtn from '../btn/CustomMuiBtn';

import CloseIcon from '@mui/icons-material/Close';

const ScrollerModal = ({ isOpen, onClose, onPriceRangeSelect }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleClose = () => {
    onClose();
  };

  const handlePriceRangeSelect = (range) => {
    setSelectedPriceRange(range);
  };

  const handleSubmit = () => {
    onPriceRangeSelect(selectedPriceRange);
    handleClose();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: 250,
    borderRadius: 6,
    overflow: 'hidden',
  };

  return (
    <>
      <div>
        <Modal open={isOpen} onClose={handleClose}>
          <Box sx={style}>
            <CustomMuiBtn onClick={handleClose}>
              <CloseIcon style={{ fontSize: '15px' }} />
            </CustomMuiBtn>
            <Row className='' style={{ marginTop: '3%' }}>
              <Col className='col-12 px-2 py-2' style={{ marginTop: '2%' }}>
                <div>
                  <h5 style={{ textAlign: 'center', color: '#fa6e42' }}>
                    Select Your Budget
                  </h5>
                  <div style={{}}>
                    <PriceScroller
                      onPriceRangeSelect={handlePriceRangeSelect}
                    />
                  </div>
                </div>

                <div className='text-center' style={{ marginTop: '5%' }}>
                  <Button
                    onClick={handleSubmit}
                    className='btn-button'
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '-5px',
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ScrollerModal;
