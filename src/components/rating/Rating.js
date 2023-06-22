import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const RatingComponent = () => {
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        '& .MuiRating-root': {
          fontSize: '48px',
        },
      }}
    >
      <Typography component='legend'> </Typography>
      <Rating onClick={{ handleChange }} name='no-value' value={null} />
    </Box>
  );
};

RatingComponent.propTypes = {
  value: PropTypes.number,
};

export default RatingComponent;
