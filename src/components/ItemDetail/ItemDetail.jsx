import { useState } from "react"
import Modal from "react-modal"
import { useCartContext } from "../../context/CartContext"
import { precioConDescuento } from "../../assets/funciones"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

// Modal Set Root
Modal.setAppElement("#root")

const ItemDetail = ({ producto }) => {
   // Modal
   const [modal, setModal] = useState(false)

   // Context
   const { addItem } = useCartContext()
   const onAdd = (contador) => {
      // [TODO] fn pendiente: consultar si agregamos desde cero o modificamos la cantidad
      addItem(producto, contador)
      setModal(true)
   }
   // console.log(producto)
   // Data
   const {
      modelo,
      precio,
      descuento,
      galeria,
      marca,
      categorias,
      stock,
      descripcion
   } = producto

   return (
      <div className="uk-animation-fade uk-animation-fast" data-uk-grid>
         <div className="uk-width-1-2@m">
            <div data-uk-sticky="media: @m; end: footer; offset: 100">
               <h1 className="uk-width-1-1 uk-h2 uk-text-bold">{modelo}</h1>
               <div data-uk-slider="finite: true">
                  <ul className="uk-slider-items">
                     { galeria.map((imagen, index) => (
                        <li className="uk-width-4-5" key={index}>
                           <img src={imagen} alt={imagen} />
                        </li>
                     )) }
                  </ul>
                  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
               </div>
            </div>
         </div>
         <div className="uk-width-1-2@m">
            <h4 className="uk-display-block uk-margin-remove">
               <strong>Marca: {marca}</strong>
            </h4>
            <ul className="uk-grid uk-grid-small uk-margin-small-top">
               {categorias.map((categoria, index) => (
                  <li className="uk-width-auto" key={index}>
                     <div>
                        {index !== 0 && <span>/</span>}
                        <strong className="uk-text-bold">
                           {index !== 0} {categoria}
                        </strong>
                     </div>
                  </li>
               ))}
            </ul>
            <div className="uk-flex uk-flex-middle uk-margin-top">
               <h3
                  className="uk-h2 uk-text-bold uk-margin-remove"
                  style={{ lineHeight: 1 }}
               >
                  <small>$</small>
                  {precioConDescuento(precio, descuento).toLocaleString(
                     "es-CL"
                  )}
               </h3>
               <span className="uk-label uk-margin-small-left">
                  {descuento}% DCTO
               </span>
            </div>
            <div className="uk-margin-top">
               <ItemCount min={1} stock={stock} onAdd={onAdd} />
            </div>
            {/* <table
               className="uk-table uk-table-small uk-table-divider uk-margin-medium-top"
               style={{ border: "1px solid #e5e5e5" }}
            >
               <tbody>
                  {caracteristicas.map((caracteristica) => (
                     <tr key={caracteristica}>
                        <td>{caracteristica.split(":")[0]}:</td>
                        <td>{caracteristica.split(":")[1]}</td>
                     </tr>
                  ))}
               </tbody>
            </table> */}
            <div className="uk-margin-medium-top">
               {descripcion}
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

export default ItemDetail
