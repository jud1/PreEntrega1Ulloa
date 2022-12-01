import Busqueda from "../Busqueda/Busqueda"
import CarWidget from "../CartWidget/CarWidget"

const NavBar = () => {
   return (
      <header data-uk-sticky>
         <nav className="uk-navbar-container uk-container" data-uk-navbar='mode: click'>
            {/* Left */}
            <div className="uk-navbar-left">
               <a className="uk-navbar-item uk-logo" href="./" aria-label="Back to Home">JUD STORE</a>
            </div>
            {/* Right */}
            <div className="uk-navbar-right">
               <Busqueda placeholder={"Busca aquí"}/>
               <ul className="uk-navbar-nav">
                  <li>
                     <a href="./">Consolas</a>
                  </li>
                  <li>
                     <a href="./">Juegos</a>
                  </li>
                  <li>
                     <a href="./">Accesorios</a>
                  </li>
                  <li>
                     <CarWidget/>
                  </li>
               </ul>
            </div>

         </nav>
      </header>
   )
}

export default NavBar