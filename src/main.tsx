import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss' // Import file style tổng tại đây
import Home from './pages/Home.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />  

  </React.StrictMode>,
)