import React from 'react'

import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <Container>
        <main className="py-3">
          <h2>FC Market</h2>
          <Home />
        </main>
      </Container>
      <Footer />
    </div>
  )
}

export default App
