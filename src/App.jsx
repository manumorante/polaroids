import React from 'react'
import { polaroids } from './polaroids'
import Logo from './components/Logo'
import Pile from './components/Pile'
import Bg from './components/Bg'

export default function App() {
  return (
    <>
      <Logo />
      <Pile data={polaroids} />
      <Bg />
    </>
  )
}
