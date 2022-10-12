import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global';
import { Layout } from './components/Layout';
import { Routes } from './routes';
import { ToastContainer } from './components/Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer/>
        <Layout>
          <Routes/>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
