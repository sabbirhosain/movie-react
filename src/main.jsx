import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MovieDataProvider from './ContextAPI/ContextAPI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MovieDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieDataProvider>
  // </React.StrictMode>,
)
