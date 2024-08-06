import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const feedback = [
  { id: 1, name: 'Jenny Wilson', comment: 'Great service!' },
  { id: 2, name: 'Dianne Russell', comment: 'Amazing food!' },
  // Add more feedback as needed
];

const CustomerFeedback = () => (
  <List component={Paper}>
    {feedback.map((item) => (
      <ListItem key={item.id}>
        <ListItemText primary={item.name} secondary={item.comment} />
      </ListItem>
    ))}
  </List>
);

export default CustomerFeedback;
