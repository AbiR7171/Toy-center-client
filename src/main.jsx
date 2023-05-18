import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import route from './Routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={route} />
  </React.StrictMode>
  </AuthProvider>
)
