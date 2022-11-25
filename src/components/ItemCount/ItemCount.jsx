import { useState } from "react"
/* import PropTypes from "prop-types" */

const ItemCount = ({ stock, min }) => {
   const [contador, setContador] = useState(min)
   const incrementar = () => contador < stock && setContador(contador + 1)
   const decrementar = () => contador > min && setContador(contador - 1)

   const agregarCarrito = () => console.log("Producto agregado!")

   return (
      <div className="uk-container" data-uk-margin="margin: uk-margin-top">
         <div className="uk-flex">
            <button
               className="uk-button uk-button-secondary"
               onClick={() => decrementar()}
            >
               -
            </button>
            <input
               className="uk-input uk-text-center"
               style={contador===10 || contador===1 ? { width: "70px", color: 'red' } : { width: "70px" }}
               type="text"
               readOnly
               value={contador}
            />
            <button
               className="uk-button uk-button-primary"
               onClick={() => incrementar()}
            >
               +
            </button>
         </div>
         <div>
            <button
               className="uk-button uk-button-primary"
               onClick={() => agregarCarrito()}
            >
               Añadir al carrito
            </button>
         </div>
      </div>
   )
}

export default ItemCount

/* ItemCount.propTypes = {
   stock: PropTypes.number.isRequired,
   min: PropTypes.number.isRequired,
}

ItemCount.defaultProps = {
   stock: 10,
   min: 0,
} */
