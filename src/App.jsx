import { useState } from 'react'
import { Crear } from './components/pages/Crear'
import { Editar } from './components/pages/Editar'
import { Inicio } from './components/pages/Inicio'
import { Rutas } from './routing/Rutas'


function App() {
  

  return (
    <div className="layout">
      <Rutas />
    </div>
  )
}

export default App
