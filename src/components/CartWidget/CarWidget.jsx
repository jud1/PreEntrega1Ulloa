import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CarWidget = () => {
   const {getItemQuantity} = useCartContext()

   return(
      <Link to="/Cart" aria-label="Back to Home">
         <span uk-icon="icon: bag"></span>
         { getItemQuantity() > 0 && <span>{getItemQuantity()}</span> } 
      </Link>
   )
}

export default CarWidget