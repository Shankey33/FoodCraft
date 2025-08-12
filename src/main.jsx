import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FoodState from './context/FoodContext.jsx'
import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import logoFavicon from './assets/logo.png';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <FoodState>
      <App />
    </FoodState>
    </HashRouter>
  </StrictMode>
)
