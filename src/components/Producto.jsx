
function Producto( { compra } ) {
  const { fruta,valor,cantidad } = compra;
  return (
    <div>
        <p>
            {fruta}
        </p>
        <p>
            Precio: ${valor}
        </p>
        <input type="number" value={cantidad} min={1}/>
        <button type='button'>Eliminar</button>
    </div>
  )
}

export default Producto