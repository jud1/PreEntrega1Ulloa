import { useState, useEffect } from "react"
import { UseContenfulSingle } from "../UseContenful/UseContenfulSingle"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
   const [producto, setProducto] = useState([])

   useEffect(() => {
      UseContenfulSingle('6W9NCTvfulNK4GZDdnnOEh')
         .then(response => setProducto(response))
   }, [])

   console.log(producto)

   return(
      <div>
         <ItemDetail producto={producto}/>
      </div>
   )
}

export default ItemDetailContainer