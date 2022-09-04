import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import ListadoProductos from './components/ListadoProductos'

function App() {
  
  return (
    <div>
      <Encabezado> Listado de compras </Encabezado>
      <Formulario/>
      <ListadoProductos>
      </ListadoProductos>
    </div>
  )
}

export default App
