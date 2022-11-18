import Carrito from "../Carrito/Carrito"

const Categorias = () => {
   return(
      <ul className="uk-navbar-nav">
         <li className="uk-active">
            <a href="./">Inicio</a>
         </li>
         <li><a href="./">Productos</a></li>
         <li><a href="./">Contacto</a></li>
         <li>
            <Carrito/>
         </li>
      </ul>
   )
}

export default Categorias