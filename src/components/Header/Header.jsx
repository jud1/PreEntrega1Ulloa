import Busqueda from "./Busqueda/Busqueda"
import Categorias from "./Categorias/Categorias"

const Header = () => {
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
               <Categorias/>
            </div>

         </nav>
      </header>
   )
}

export default Header