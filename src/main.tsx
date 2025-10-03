import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import FontLoader from './components/ui/FontLoader'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <FontLoader>
          <App />
        </FontLoader>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
