import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#1f1f1f', height: '125vh' }}>
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Home" style={{ color: '#fff' }} />
        </ListItem>
        <ListItem button>
          <ListItemIcon><DashboardIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" style={{ color: '#fff' }} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
