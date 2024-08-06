import React from 'react';
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Dashboard = () => {
  const stats = [
    { label: 'Total Orders', value: 75, icon: <ShoppingCartIcon />, color: '#2196f3' },
    { label: 'Total Delivered', value: 70, icon: <LocalShippingIcon />, color: '#4caf50' },
    { label: 'Total Cancelled', value: 5, icon: <CancelIcon />, color: '#f44336' },
    { label: 'Total Revenue', value: '$12k', icon: <AttachMoneyIcon />, color: '#ff9800' }
  ];

  const netProfit = { label: 'Net Profit', value: '$6795.25', icon: <TrendingUpIcon />, color: '#673ab7' };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: stat.color }}>
                      {stat.icon}
                    </IconButton>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6">{stat.label}</Typography>
                      <Typography variant="h4">{stat.value}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', minHeight: 120 }}>
            <IconButton sx={{ color: netProfit.color }}>
              {netProfit.icon}
            </IconButton>
            <Box sx={{ ml: 2 }}>
              <Typography variant="h6">{netProfit.label}</Typography>
              <Typography variant="h4">{netProfit.value}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Activity</Typography>
            <ActivityChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Orders</Typography>
            <RecentOrders />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Customer Feedback</Typography>
            <CustomerFeedback />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
