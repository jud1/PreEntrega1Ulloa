import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useContenful } from "../UseContenful/UseContenful"
import ItemList from '../ItemList/ItemList'
import SlideshowHero from "../SlideshowHero/SlideshowHero"


const ItemListContainer = () => {
   const [items, setItems] = useState([])
   const { categoria } = useParams()
   const data = useContenful('productos')
   useEffect(() => {

      if(categoria){
         data
            .then(respuesta => {
               const filtrado = []
               respuesta.forEach(e => e.categorias.includes(categoria) && filtrado.push(e) )
               setItems(filtrado)
               console.log('Carga lista')
            })
      } else {
         data
            .then(respuesta => setItems(respuesta))
      }

   }, [categoria])
   
   return(
      <>
         {categoria ? false : <SlideshowHero/>}
         <div className="uk-container uk-margin-medium-top">
            {categoria && <h2>Categoría: {categoria}</h2>}
            <ItemList arrItems={items}/>
         </div>
      </>
   )
}

export default ItemListContainer