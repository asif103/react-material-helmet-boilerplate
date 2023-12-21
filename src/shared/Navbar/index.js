import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { HeaderMenu } from '../../router/NavData';
import { Link } from 'react-router-dom';
import  navLogo from "../../assets/images/navLogo-01.png"

const drawerWidth = 240;
const menuItemStyle = { 
    display:"inline-block",
    paddingRight: 15, 
    textDecoration:"none", 
    fontWeight:500, 
    fontSize:18, 
    color:"#282828",
}


const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          
            {/* <Divider /> */}
            <List>
                {HeaderMenu?.map((item) => (
                    <ListItem key={item.id} disablePadding >
                        <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.path}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            
            <AppBar style={{backgroundColor : "#ffffff", boxShadow : 'none'}}>
                <Toolbar>
                   <Typography
                        // variant="h6"
                        // component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        <img src={navLogo} alt="Nav Logo" width={250}/>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {HeaderMenu?.map((item) => (
                            <Typography variant='subtitle1' key={item} style={menuItemStyle} component={Link} to={item.path}>
                                {item.title}
                            </Typography>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                       
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <nav>
                
                <Drawer
                    anchor="right"
                    container={container}
                    // variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
};

export default Navbar;