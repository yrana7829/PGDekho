import React, { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';

const minDistance = 20;

const marks = [
  {
    value: 0,
    label: '0k',
  },
  {
    value: 50,
    label: '50k',
  },
  {
    value: 100,
    label: '80k',
  },
];

const PriceScroller = ({ onPriceRangeSelect }) => {
  const [value, setValue] = useState([0, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBlur = () => {
    const [start, end] = value;
    if (end - start < minDistance) {
      const newEnd = start + minDistance;
      setValue([start, newEnd]);
    }

    const formattedStart = start === 0 ? `${start}k` : `${start}k`;
    const formattedEnd = `${end}k`;
    onPriceRangeSelect(`${formattedStart}-${formattedEnd}`);
  };

  return (
    <Box sx={{ width: 'auto' }} p={3}>
      <Slider
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        valueLabelDisplay='auto'
        marks={marks}
        valueLabelFormat={(value) => `${value}k`}
        sx={{
          '& .MuiSlider-rail': {
            height: '35px',
            borderRadius: 0,
            clipPath: 'polygon(0% 75%,100% 0%,100% 100%,0% 100%)',
            background: `linear-gradient(90deg, #ccc ${value[0]}%, #F74 ${value[0]}%, #F74 ${value[1]}%, #ccc ${value[1]}%)`,
            opacity: 1,
          },
          '& .MuiSlider-track': {
            display: 'none',
          },
          '& .MuiSlider-thumb': {
            top: '70%',
            backgroundColor: '#F74',
            border: '4px solid #fff',
            boxShadow:
              '0px 3px 1px -2px rgba(0,0,0,0.1), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.1)',
            '&:before': {
              boxShadow: 'none',
            },
          },
          "& [data-index='0']:not(.MuiSlider-markLabel)": {
            top: `${90 - value[0] / 4}%`,
            width: `calc(22px + ${0.15 * value[0]}px)`,
            height: `calc(22px + ${0.15 * value[0]}px)`,
          },
          "& [data-index='1']:not(.MuiSlider-markLabel)": {
            top: `${80 - value[1] / 4}%`,
            width: `calc(25px + ${0.15 * value[1]}px)`,
            height: `calc(25px + ${0.15 * value[1]}px)`,
          },
          '& .MuiSlider-markLabel': {
            marginTop: '0.78rem',
            color: '#c0c0c0',
            '&.MuiSlider-markLabelActive': {
              color: '#F74',
            },
          },
          '& .MuiSlider-mark': {
            display: 'none',
          },
        }}
      />
    </Box>
  );
};

export default PriceScroller;
