import { useForm } from 'react-hook-form';
import { productos } from '../data/productos.data';

function Formulario({ compras, setCompras }) {
  const { register, handleSubmit} = useForm();
  
  const onSubmit = (data) => {
    data.valor = obtenerPrecio(data.fruta);
    data.key = ramdomKey();
    data.cantidad = 1;
    setCompras([...compras,data]);
  };
  
  const ramdomKey = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2);
    return fecha + random;
  }

  const obtenerPrecio = (nombreProducto) => {
    const productoEncontrado = productos.find((prod)=>(prod.nombre===nombreProducto))
    return productoEncontrado.valor;
  }

  return (
    <form className='flex' onSubmit={handleSubmit(onSubmit)}>
      <div className='seleccionar-producto'>
        <label className='label'>Agregar elemento:</label>
        <select className='select' {...register("fruta")} style={{'textTransform':'capitalize'}}>
          {
              productos.map(({nombre})=>{
                return <option key={ramdomKey()} style={{'textTransform':'capitalize'}} value={nombre}>{nombre}</option>
              })
          }
        </select>
      </div>
      <button className='agregar-producto' type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;