import Producto from "./Producto"
import { useState } from "react"

export default function ListadoProductos() {
  return (
    <div>
        {
            <Producto></Producto>
        }
        <p>Total: $total</p>
    </div>
  )
}
