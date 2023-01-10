import { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"
import ItemCount from "../ItemCount/ItemCount"
import { precioConDescuento } from "../../functions/funciones"
import { UseDarkModeContext } from "../../context/DarkModeContext"
import { useCartContext } from "../../context/CartContext"

const Item = ({ item }) => {
   const [ modal, setModal ] = useState(false)
   const { darkMode } = UseDarkModeContext()
   const { addItem } = useCartContext()

   const onAdd = (contador) => {
      addItem(item, contador)
      setModal(true)
   }
   const { nombre, marca, galeria, precio, descuento, stock, id } = item

   return (
      <div className={`uk-card uk-padding-small uk-animation-slide-bottom-small uk-margin-top ${darkMode ? "uk-card-secondary" : "uk-card-default"}`} style={{ filter: stock<1 ? "grayscale(1)" : false }}>
         <figure
            className="uk-height-medium uk-background-contain"
            style={{ backgroundImage: `url(${galeria[0]})` }}
         ></figure>
         <div
            className="uk-card-body uk-padding-small"
            data-uk-margin="margin: uk-margin-small-top"
         >
            <div className="equalizer-height">
               <h4 className="uk-text-center uk-text-bold uk-margin-remove-bottom">
                  {marca} - {nombre}
               </h4>
               <div className="uk-flex uk-flex-middle uk-flex-center">
                  <span className="uk-h4 uk-display-block uk-margin-remove-bottom uk-h2 uk-text-bold uk-text-primary">
                     ${precioConDescuento(precio, descuento).toLocaleString("es-CL")}
                  </span>
                  {descuento > 1 && (
                     <span className="uk-badge uk-margin-small-left">
                        - {descuento}%
                     </span>
                  )}
               </div>
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
         <Modal isOpen={modal} onRequestClose={() => setModal(false)}>
            <h3 className="uk-modal-title">Producto agregado</h3>
            <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
               <div>
                  <button
                     className="uk-button uk-button-default uk-modal-close"
                     type="button"
                     onClick={() => setModal(false)}
                  >
                     Seguir comprando
                  </button>
               </div>
               <div>
                  <Link className="uk-button uk-button-primary" to={'/cart'} >
                     Ir al carro
                  </Link>
               </div>
            </div>
         </Modal>
      </div>
   )
}

export default Item
