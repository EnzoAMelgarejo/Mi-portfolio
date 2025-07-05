import './i18n'
import i18next from './i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortfolioApp } from './portfolioapp'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.css'
import 'devicon/devicon.min.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <PortfolioApp />
  </StrictMode>
  </BrowserRouter>
)
