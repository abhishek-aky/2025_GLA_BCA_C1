import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Apple from './Components/Apple.jsx'
import Badmaashi from './Components/Badmaashi.jsx'
import Lifthamaribndhai from './Components/zerocivicsense.jsx'
import Counter from './Components/Counter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Apple/> */}
    {/* <Badmaashi/> */}
    {/* <Zerocivicsense></Zerocivicsense> */}
    {/* <Lifthamaribndhai></Lifthamaribndhai> */}
    <Counter/>
  </StrictMode>,
)
