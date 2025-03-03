import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Core from './core'
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Core/>
  </StrictMode>,
)
