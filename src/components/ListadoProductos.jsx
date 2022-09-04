import Producto from "./Producto"

function ListadoProductos( { compras, setCompras } ) {
  return (
    <div>
        {
          compras.map((compra)=>{
            return <Producto key={compra.key}compra={compra}></Producto>
          })
        }
        <p>Total: $total</p>
    </div>
  )
}

export default ListadoProductos