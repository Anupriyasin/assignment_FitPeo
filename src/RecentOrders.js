import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const orders = [
  { id: 1, customer: 'Wade Warren', amount: 302.0, status: 'Completed' },
  { id: 2, customer: 'Jane Cooper', amount: 462.0, status: 'Pending' },
  // Add more orders as needed
];

const RecentOrders = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Customer</TableCell>
          <TableCell>Order ID</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.amount}</TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default RecentOrders;
