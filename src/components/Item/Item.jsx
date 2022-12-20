import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { precioConDescuento } from "../../assets/funciones"
import { UseDarkModeContext } from "../../context/DarkModeContext"
import { useCartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom'

const Item = ({ item }) => {
   const { darkMode } = UseDarkModeContext()
   const { addItem } = useCartContext()
   let navigate = useNavigate()

   const onAdd = (contador) => {
      addItem(item, contador)
      navigate("/Cart")
   }
   const { modelo, marca, galeria, precio, descuento, stock, id } = item

   return (
      <div className={`uk-card uk-padding-small uk-animation-slide-bottom-small uk-margin-top ${darkMode ? "uk-card-secondary" : "uk-card-default"}`}>
         <figure
            className="uk-height-medium uk-background-contain"
            style={{ backgroundImage: `url(${galeria[0].file.url})` }}
         ></figure>
         <div
            className="uk-card-body uk-padding-small"
            data-uk-margin="margin: uk-margin-small-top uk-margin-remove-bottom"
         >
            <h4 className="uk-text-center uk-text-bold">
               {marca} - {modelo}
            </h4>
            <div className="uk-flex uk-flex-middle">
               <span className="uk-h4 uk-display-block uk-margin-remove-bottom">
                  ${precioConDescuento(precio, descuento).toLocaleString("es-CL")}
               </span>
               {descuento && (
                  <span className="uk-badge uk-margin-small-left">
                     - {descuento}%
                  </span>
               )}
            </div>
            <div>
               <Link
                  className="uk-button uk-button-secondary uk-width-1-1"
                  to={`/productos/${id}`}
               >
                  Ver producto
               </Link>
            </div>
            <div className="uk-margin-top">
               <ItemCount min={1} stock={stock} onAdd={onAdd} />
            </div>
         </div>
      </div>
   )
}

export default Item
