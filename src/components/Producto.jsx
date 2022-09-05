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
    <>
      <div className='producto'>
        <div className='flex-grow'>
            <p>
                {fruta}
            </p>
            <p>
                Precio: ${valor}
            </p>
        </div>
        <div className='grid-center'>
            <input type="number" value={cantidadLocal} min={1} onChange={handleCantidadLocal} style={{width:'5ch'}}/>
            <button style={{marginLeft:'10px'}} type='button' onClick={handleEliminarProducto}>Eliminar</button>
        </div>
      </div>
      <hr/>
    </>
  )
}

export default Producto