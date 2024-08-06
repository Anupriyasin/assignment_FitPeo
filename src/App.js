import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Header from './Header';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <main className="main-content">
          <Dashboard />
        </main>
      </Box>
    </div>
  );
}

export default App;
