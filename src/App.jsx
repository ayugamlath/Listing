import { BrowserRouter, Route,Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
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