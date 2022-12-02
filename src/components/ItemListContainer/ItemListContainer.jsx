import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useContenful } from "../UseContenful/UseContenful"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
   const [items, setItems] = useState([])
   const { categoria } = useParams()

   useEffect(() => {

      if(categoria){
         useContenful('productos')
            .then(respuesta => {
               const filtrado = []
               respuesta.forEach(e => e.categorias.includes(categoria) && filtrado.push(e) )
               setItems(filtrado)
               console.log('Carga lista')
            })
      } else {
         useContenful('productos')
            .then(respuesta => setItems(respuesta))
      }

   }, [categoria])
   
   return(
      <>
         <div className="uk-container uk-margin-medium-top">
            {categoria && <h2>Categoría: {categoria}</h2>}
            <ItemList arrItems={items}/>
         </div>
      </>
   )
}

export default ItemListContainer
