import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyList from './component/Properties';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashboardPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App