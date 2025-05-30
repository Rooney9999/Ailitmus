import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

function Layout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', m: 0 }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', m: 0, p: 0 }}>
        <Navbar />
        <Box sx={{ flexGrow: 1, backgroundColor: 'var(--off-white)', p: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
