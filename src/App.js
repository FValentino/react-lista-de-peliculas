import { useState } from 'react'
import './App.css'
import pelicula from './componentes/pelicula'

function App() {
  const [count, setCount] = useState(0)

  return ( pelicula() )
}

export default App