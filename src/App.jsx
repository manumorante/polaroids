import React from 'react'
import { polaroids } from '../public/polaroids'
import Pile from './components/Pile'

export default function App() {
  return <Pile data={polaroids} />
}
