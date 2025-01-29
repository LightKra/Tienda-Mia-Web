import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/app'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/auth'
import 'normalize.css'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
