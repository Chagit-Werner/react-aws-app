import React from 'react';
import { Box, Typography } from '@mui/material';
export default function Error404(){
    return  <Box
    sx={{


      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      minWidth:'100vh',

    }}
  >
    <Typography variant="h1" style={{ color: 'blue' }}>
      404
    </Typography>
    <Typography variant="h6" style={{ color: 'blue' }}>
      The page you’re looking for doesn’t exist.
    </Typography>
  </Box>
}
