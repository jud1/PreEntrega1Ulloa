import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import { getProductos } from "../../functions/firebase"

const ItemListContainer = () => {
   const [items, setItems] = useState([])
   const { categoria } = useParams()
   useEffect(() => {
      if(categoria){
         getProductos()
            .then(productos=> {
               const filtrado = []
               productos.forEach(e => {
                  if(e.categorias.includes(categoria) && e.stock>=1){
                     filtrado.push(e)
                  }
               })
               setItems(filtrado)
            })
      } else {
         getProductos()
            .then(productos=>{
               const aux = productos.filter(prod=> prod.stock>=1)
               setItems(aux)
            })
      }
   }, [categoria])
   
   return(
      <>
         <div className="uk-container">
            {categoria && <h2 className="uk-margin-medium-top">Categoría: {categoria}</h2>}
            <ItemList arrItems={items}/>
         </div>
      </>
   )
}

export default ItemListContainer