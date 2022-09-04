
function Producto() {
  
  return (
    <div>
        <p>
            nombre del producto
        </p>
        <p>
            Precio: $valor
        </p>
        <input type="number" value="" min={1}/>
        <button type='button'>Eliminar</button>
    </div>
  )
}

export default Producto