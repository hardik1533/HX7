import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Stairs from './common/Stairs.jsx'
import ContextNav from './context/ContextNav.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Stairs>
                <ContextNav>
                    <App />
                </ContextNav>
            </Stairs>
        </BrowserRouter>
    </StrictMode>,
)
