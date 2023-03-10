import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UseContext from './context/UseContext'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UseContext>
        <App />
    </UseContext>
)
