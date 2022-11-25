import { useState, useEffect } from "react"
import { UseContenful } from "../UseContenful/UseContenful"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
   const [items, setItems] = useState([])

   useEffect(() => {
      UseContenful('productos')
         .then((response) => setItems(response))
   }, [])

   return(
      <ItemList arrItems={items}/>
   )
}

export default ItemListContainer
