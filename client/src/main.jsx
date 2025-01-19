import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </AuthContextProvider>
  </BrowserRouter>
)
