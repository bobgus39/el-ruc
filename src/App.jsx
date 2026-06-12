import { Routes, Route } from 'react-router-dom'
import NavbarEl from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-ruc-cream">
      <NavbarEl />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
