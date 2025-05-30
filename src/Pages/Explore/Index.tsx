import React from 'react';
import { Box, Typography } from '@mui/material';

const Explore: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography  gutterBottom>
        Explore
      </Typography>
      <Typography >
        This is the Explore page. Add your exploration or discovery content here.
      </Typography>
    </Box>
  );
};

export default Explore;