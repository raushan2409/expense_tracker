import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './input.css'
import './components/Pages/Output.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProdvider } from './components/Context/AuthContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthContextProdvider>
    <App />
    </AuthContextProdvider>
    </BrowserRouter>
  
)
