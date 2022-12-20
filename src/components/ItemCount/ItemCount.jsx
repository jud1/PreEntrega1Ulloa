import { useState } from "react"
/* import PropTypes from "prop-types" */

const ItemCount = ({ stock, min, onAdd }) => {
   const [contador, setContador] = useState(min)
   const incrementar = () => contador < stock && setContador(contador + 1)
   const decrementar = () => contador > min && setContador(contador - 1)
   const agregarCarrito = () => onAdd(contador)

   return (
      <div className="uk-container" data-uk-margin="margin: uk-margin-top">
         <div className="uk-flex">
            <button
               className="uk-button uk-button-default"
               onClick={() => decrementar()}
            >
               -
            </button>
            <input
               className="uk-input uk-text-center"
               style={{ width: "70px" }}
               type="text"
               readOnly
               value={contador}
            />
            <button
               className="uk-button uk-button-default"
               onClick={() => incrementar()}
            >
               +
            </button>
            <div className="uk-width-expand">
               <button
                  className="uk-button uk-button-danger uk-width-1-1"
                  data-uk-icon="icon: cart"
                  onClick={() => agregarCarrito()}
               ></button>
            </div>
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
