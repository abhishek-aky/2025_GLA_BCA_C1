import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hey from './Components/Hey.jsx'
import Hi from './Components/hi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Hey> </Hey> */}
    <Hey/>
    {/* <Hey/> */}
    {/* <Hi></Hi> */}
    <Hi/>

  </StrictMode>,
)
