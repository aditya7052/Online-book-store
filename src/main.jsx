import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import swDev from './swDev'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
)
// swDev();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register(`/sw.js`)
      .then((response) => {
          console.warn("Service Worker registered:", response);
      })
      .catch((err) => {
          console.error("Service Worker registration failed:", err);
      });
}