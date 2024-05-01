import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import theme from './config/theme';

import SideNav from './components/SideNav';
import Header from './components/Header';

function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />

        <Box sx={styles.container}>
          <SideNav />

          <Box component={'main'} sx={styles.mainSection}>

          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)',
  },
  mainSection: {
    p: 1,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}

export default App;
