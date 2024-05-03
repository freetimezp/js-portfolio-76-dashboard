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
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';

function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />

          <Header />

          <Box sx={styles.container}>
            <BrowserRouter>
              <SideNav />

              <Box component={'main'} sx={styles.mainSection}>
                <AppRoutes />
              </Box>
            </BrowserRouter>
          </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: "calc(100vh - 64px)"
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}

export default App;
