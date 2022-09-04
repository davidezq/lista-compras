import { useState,useEffect } from 'react'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import ListadoProductos from './components/ListadoProductos'

function App() {

  const [compras,setCompras] = useState([])

  return (
    <div>
      <Encabezado> Listado de compras </Encabezado>
      <Formulario compras={compras} setCompras={setCompras}/>
      <ListadoProductos compras={compras} setCompras={setCompras}/>
    </div>
  )
}

export default App
