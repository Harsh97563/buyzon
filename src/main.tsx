import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import NavBar from './components/nav-bar.tsx'
import NavSprite from './components/nav-sprite.tsx'
import Footer from './components/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar/>
    <NavSprite/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
