import { useForm } from 'react-hook-form';
import { productos } from '../data/productos.data';

export default function Formulario() {
  const { register, handleSubmit} = useForm();
  
  const onSubmit = (data) => {

    data.valor = obtenerPrecio(data.fruta);
    data.key = ramdomKey();
    data.cantidad = 1;
    console.log(data);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("fruta")}>
        {
            productos.map(({nombre})=>{
               return <option key={ramdomKey()} style={{'textTransform':'capitalize'}} value={nombre}>{nombre}</option>
            })
        }
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
}