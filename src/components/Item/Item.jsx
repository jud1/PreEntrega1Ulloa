import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { precioConDescuento } from "../../assets/funciones"

const Item = ({ item }) => {
   const { modelo, marca, galeria, precio, descuento, stock, id } = item
   return (
      <div className="uk-card uk-card-default uk-padding-small uk-animation-slide-bottom-small uk-margin-top">
         <figure
            className="uk-height-medium uk-background-contain"
            style={{ backgroundImage: `url(${galeria[0].file.url})` }}
         ></figure>
         <div
            className="uk-card-body uk-padding-small"
            data-uk-margin="margin: uk-margin-small-top uk-margin-remove-bottom"
         >
            <small>
               {marca} - {modelo}
            </small>
            <div className="uk-flex uk-flex-middle">
               <span className="uk-h4 uk-display-block uk-margin-remove-bottom">
                  ${precioConDescuento(precio, descuento)}
               </span>
               {descuento && (
                  <span className="uk-badge uk-margin-small-left">
                     - {descuento}%
                  </span>
               )}
            </div>
            <div>
               <Link
                  className="uk-button uk-button-primary"
                  to={`/productos/${id}`}
               >
                  Ver producto
               </Link>
            </div>
            <div className="uk-margin-top">
               <ItemCount min={1} stock={stock} />
            </div>
         </div>
      </div>
   )
}

export default Item
