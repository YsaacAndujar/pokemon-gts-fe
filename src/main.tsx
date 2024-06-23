import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupAxios } from 'config/axios.ts'

setupAxios()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense>
    <App />
  </React.Suspense>,
)
