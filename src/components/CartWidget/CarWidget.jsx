import { Link } from "react-router-dom"

const CarWidget = () => {
   return(
      <Link to="/Cart" aria-label="Back to Home">
         <span uk-icon="icon: bag"></span> (2)
      </Link>
   )
}

export default CarWidget