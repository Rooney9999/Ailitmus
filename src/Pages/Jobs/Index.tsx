import React from 'react';
import { Box, Typography } from '@mui/material';

const Jobs: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography  gutterBottom>
        Jobs
      </Typography>
      <Typography >
        This is the Jobs page. Add your job listings or job management content here.
      </Typography>
    </Box>
  );
};

export default Jobs;