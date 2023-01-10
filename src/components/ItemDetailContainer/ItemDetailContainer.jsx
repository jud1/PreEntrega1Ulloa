import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducto } from "../../functions/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
   const [producto, setProducto] = useState([])
   const [loading, setLoading]= useState(true)
   const {id} = useParams()

   useEffect(() => {
      getProducto(id)
         .then(producto=>setProducto(producto))
         .catch((error)=> console.error(`:( ${ error }`))
         .finally(()=> setLoading(false))
   }, [id])
   
   return(
      <div className="uk-padding uk-padding-remove-horizontal">
         <div className="uk-container">
            { loading ? 
               <p>Cargando..</p> 
               : <ItemDetail producto={ producto }/> 
            }
         </div>
      </div>
   )
}

export default ItemDetailContainer