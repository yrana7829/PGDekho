import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

export default function Locations() {
  const top100Films = [
    // Top 100 films as rated by IMDb users
    // ...
    { location: 'Sec-23, Gurugram' },
    { location: 'Sec-24, Gurugram' },
    { location: 'Sec-25, Delhi' },
    { location: 'Sec-26, Delhi' },
    { location: 'Sec-27, Delhi' },
    { location: 'Sec-28, Delhi' },
    { location: 'Sec-29, Noida' },
    { location: 'Sec-30, Noida' },
    { location: 'Sec-31, Noida' },
    { location: 'Sec-32, Noida' },
    { location: 'Sec-33, Gurugram' },
    { location: 'Sec-34, Gurugram' },
    { location: 'Sec-23, Gurugram' },
    { location: 'Sec-24, Gurugram' },
  ];

  const renderTags = (value, getTagProps) =>
    value.map((option, index) => {
      const handleDelete = () => {
        getTagProps(index).onDelete();
      };

      return (
        <div
          key={index}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'rgba(248, 248, 254, 1)',
            borderRadius: '10px',
            padding: '0 3px',
            border: '2px solid #fa6e42',
            height: '25px',
            fontFamily: 'Plus Jakarta Sans',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '15px',
            letterSpacing: '0.01em',
            color: '#222222',
            marginTop: 'auto',
            textOverflow: 'clip',
          }}
        >
          {option.location}
          <CloseIcon
            style={{
              fontSize: '15px',
              border: '1px solid black',
              borderRadius: '10px',
              opacity: '0.5',
              marginLeft: '2px',
              cursor: 'pointer',
            }}
            onClick={handleDelete}
          />
        </div>
      );
    });

  return (
    <Stack spacing={0} sx={{}}>
      <Autocomplete
        style={{
          marginTop: '15px',
          marginBottom: '0px',
          width: '100%',
          overflow: 'hidden',

          textOverflow: 'clip',
        }}
        multiple
        id='size-small-standard-multi'
        size='small'
        options={top100Films}
        getOptionLabel={(option) => option.location}
        defaultValue={[top100Films[3]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='standard'
            placeholder='Add More'
            sx={{
              '& .MuiInputBase-input': {
                fontSize: '10px',
                textAlign: 'end',
                overflow: 'hidden',

                textOverflow: 'clip',
              },
              '& .MuiInputBase-root': {
                borderBottom: 'none', // Remove bottom border
              },
            }}
          />
        )}
        renderTags={renderTags}
      />
    </Stack>
  );
}
