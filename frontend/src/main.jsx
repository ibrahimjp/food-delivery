import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx'; // Import your StoreContextProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider> {/* Wrap App with StoreContextProvider */}
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);