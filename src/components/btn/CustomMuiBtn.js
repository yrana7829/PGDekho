import React from 'react';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CustomMuiBtn = ({ onClick }) => {
  return (
    <div>
      <Button
        onClick={onClick}
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
      >
        {' '}
        <CloseIcon style={{ fontSize: '15px' }} />
      </Button>
    </div>
  );
};

export default CustomMuiBtn;
