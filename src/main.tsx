import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Thread from './Thread'
import "./assets/styles.scss"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/threads/:id" element={<Thread />} />
        <Route path="/messages/:id" element={<Thread />} />
        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
