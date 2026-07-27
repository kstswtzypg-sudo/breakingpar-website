import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
