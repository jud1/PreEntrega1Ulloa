import { NavLink, Link } from "react-router-dom"
import { UseDarkModeContext } from "../../context/DarkModeContext"
import Busqueda from "../Busqueda/Busqueda"
import CarWidget from "../CartWidget/CarWidget"
import ButtonDarkMode from "./ButtonDarkMode/ButtonDarkMode"

const NavBar = () => {
   const activeClassName = "uk-text-primary"
   const { darkMode } = UseDarkModeContext()

   return (
      <header
         data-uk-sticky
      >
         <div className={`uk-width-1-1 ${darkMode ? "uk-background-secondary" : "uk-background-default"}`}>
            <nav
               className="uk-navbar-container uk-container"
               style={{backgroundColor: 'transparent'}}
               data-uk-navbar="mode: click"
            >
               {/* Left */}
               <div className="uk-navbar-left">
                  <Link
                     className="uk-navbar-item uk-logo"
                     to="/"
                     aria-label="Back to Home"
                  >
                     JUD STORE
                  </Link>
               </div>
               <div>
                  <ButtonDarkMode />
               </div>
               {/* Right */}
               <div className="uk-navbar-right">
                  <Busqueda placeholder={"Busca aquí"} />
                  <ul className="uk-navbar-nav">
                     <li>
                        <NavLink
                           to={`/categorias/Nintendo`}
                           className={({ isActive }) =>
                              isActive ? activeClassName : undefined
                           }
                        >
                           Nintendo
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to={`/categorias/Playstation`}
                           className={({ isActive }) =>
                              isActive ? activeClassName : undefined
                           }
                        >
                           Playstation
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to={`/categorias/Xbox`}
                           className={({ isActive }) =>
                              isActive ? activeClassName : undefined
                           }
                        >
                           Xbox
                        </NavLink>
                     </li>
                     <li>
                        <CarWidget />
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default NavBar
