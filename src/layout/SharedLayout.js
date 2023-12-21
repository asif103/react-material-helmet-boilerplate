import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import Navbar from '../shared/Navbar';

const SharedLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default SharedLayout;
