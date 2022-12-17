import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { StrictMode } from 'react';

// Redux Toolkit
import { store } from './app/store/store';
import { Provider } from 'react-redux';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
