import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router className="main-container">
      <Header />
      <Container className="mt-5">
        <main className="py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </main>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
