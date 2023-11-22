import React from 'react'

import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <main className='py-3'>
        <h2>FC Market</h2>

        </main>
      </Container>
      <Footer />
    </div>
  )
}

export default App
