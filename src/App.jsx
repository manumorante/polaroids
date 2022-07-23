import React from 'react'
import { polaroids } from '../public/polaroids'
import Logo from './components/Logo'
import Pile from './components/Pile'

export default function App() {
  return (
    <>
      <Logo />
      <Pile data={polaroids} />
    </>
  )
}
