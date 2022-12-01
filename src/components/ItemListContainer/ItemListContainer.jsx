import { useState, useEffect } from "react"
import { UseContenful } from "../UseContenful/UseContenful"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
   const [items, setItems] = useState([])

   useEffect(() => {
      UseContenful('productos')
         .then(response => setItems(response))
   }, [])
   
   return(
      <>
         <h1 className="uk-container">{greeting}</h1>
         <ItemList arrItems={items}/>
      </>
   )
}

export default ItemListContainer
