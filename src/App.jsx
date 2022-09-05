import { useState,useEffect } from 'react'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import ListadoProductos from './components/ListadoProductos'

function App() {

  const [compras,setCompras] = useState([])
  const [total,setTotal] = useState(0);
  useEffect(()=>{
    
    if(!compras.length){
      return
    } else {
      setTotal((compras.reduce((prev,next) => prev+(next.cantidad*next.valor),0)))
    }
  },[compras])
  return (
    <div className='container'>
      <Encabezado> Listado de compras </Encabezado>
      <Formulario compras={compras} setCompras={setCompras}/>
      <ListadoProductos compras={compras} setCompras={setCompras} total={total}/>
    </div>
  )
}

export default App
