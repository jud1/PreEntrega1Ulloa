import { useState, useEffect } from "react"
import { UseContenfulSingle } from "../UseContenful/UseContenfulSingle"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
   const [producto, setProducto] = useState([])
   const [loading, setLoading]= useState(true)

   useEffect(() => {
      UseContenfulSingle('6W9NCTvfulNK4GZDdnnOEh')
         .then(response => setProducto(response))
         .finally(()=> setLoading(false))
            .catch((error)=> console.error(`:( ${error}`))
   }, [])

   return(
      <div className="uk-padding uk-padding-remove-horizontal">
         <div className="uk-container">
            { loading ? <p>Cargando..</p> :<ItemDetail producto={producto}/>}
         </div>
      </div>
   )
}

export default ItemDetailContainer