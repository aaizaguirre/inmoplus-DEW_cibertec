import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Filtro from './Filtro.jsx'
import SeccionNosotros from './SeccionNosotros.jsx'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Filtro />
      <SeccionNosotros/>
    </>
  )
}

export default App
