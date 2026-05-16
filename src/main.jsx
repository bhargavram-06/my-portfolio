import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * The Entry Point: 
 * It targets the 'root' div in index.html and renders the App component.
 * StrictMode is enabled to help catch potential problems during development.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)