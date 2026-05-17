import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WhatIsFdePage from './pages/WhatIsFdePage'
import WaitlistPage from './pages/WaitlistPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-is-fde" element={<WhatIsFdePage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
