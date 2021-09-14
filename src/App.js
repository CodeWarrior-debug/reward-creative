import React from 'react';
import Products from './components/Products/Products'
import Sampler from './pages/index'
import { ThemeProvider } from 'styled-components'

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
  },
};


const App = () =>{
    return (
        <ThemeProvider theme={theme}>
    <div>
        <Sampler />
    </div>
      </ThemeProvider>
    )
};

export default App;

