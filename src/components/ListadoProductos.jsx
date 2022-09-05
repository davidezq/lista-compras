import Producto from "./Producto"

function ListadoProductos( { compras, setCompras, total } ) {
  return (
    <div>
        {
          compras.map((compra)=>{
            return <Producto key={compra.key} compras={compras} setCompras={setCompras} compra={compra} total={total}></Producto>
          })
        }
        
        { !!total && !!compras.length && (
            <p className="total">Total: ${Number.parseFloat(total).toFixed(2)}</p>
          )
        }
    </div>
  )
}

export default ListadoProductos