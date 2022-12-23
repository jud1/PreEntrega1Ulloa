import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import SlideshowHero from "../SlideshowHero/SlideshowHero"
import { getProductos } from "../../assets/firebase"

const ItemListContainer = () => {
   const [items, setItems] = useState([])
   const { categoria } = useParams()
   useEffect(() => {
      if(categoria){
         getProductos()
            .then(productos=> {
               const filtrado = []
               productos.forEach(e => e.categorias.includes(categoria) && filtrado.push(e) )
               setItems(filtrado)
            })
      } else {
         getProductos()
            .then(productos=>setItems(productos))
      }
   }, [categoria])
   console.log(items)
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