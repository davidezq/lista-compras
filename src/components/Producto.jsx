import {useState} from 'react' 

function Producto( { compras, setCompras, compra} ) {
  const { fruta,valor,cantidad,key } = compra;
  const [ cantidadLocal, setCantidadLocal ] = useState(1);

  const handleCantidadLocal = (e) => {
    setCantidadLocal(e.target.value)
    const actualizandoCompra = {
      fruta,
      valor,
      cantidad: Number(e.target.value),
      key
    }
    const compraPasada = compras.map((compra)=>{
      if(compra.key === key){
        return compra = actualizandoCompra;
      }else{
        return compra
      }
    })
    const actualizandoCompras = compraPasada
    setCompras(actualizandoCompras);
  }

  const handleEliminarProducto = () => {
    const nuevasCompras = compras.filter((compra)=>(compra.key !== key))
    setCompras(nuevasCompras);
  }

  return (
    <div>
        <p>
            {fruta}
        </p>
        <p>
            Precio: ${valor}
        </p>
        <input type="number" value={cantidadLocal} min={1} onChange={handleCantidadLocal}/>
        <button type='button' onClick={handleEliminarProducto}>Eliminar</button>
    </div>
  )
}

export default Producto