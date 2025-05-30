import React from 'react';
import { Box, Typography } from '@mui/material';

const Billing: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography  gutterBottom>
        Billing
      </Typography>
      <Typography >
        This is the Billing page. Add your billing information or payment management content here.
      </Typography>
    </Box>
  );
};

export default Billing;