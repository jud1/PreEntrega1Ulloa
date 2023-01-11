import { NavLink, Link } from "react-router-dom"
import { UseDarkModeContext } from "../../context/DarkModeContext"
import CarWidget from "../CartWidget/CarWidget"
import ButtonDarkMode from "./ButtonDarkMode/ButtonDarkMode"

const NavBar = () => {
   const activeClassName = "uk-text-primary"
   const { darkMode } = UseDarkModeContext()

   return (
      <header
         className="uk-box-shadow-small"
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
                     Yerba Mate Talca
                  </Link>
               </div>
               <div className="uk-flex uk-flex-middle uk-flex-center uk-margin-small-left">
                  <ButtonDarkMode />
                  {/* <GoogleLogin className="uk-margin-small-left"></GoogleLogin> */}
               </div>
               {/* Right */}
               <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                     <li>
                        <NavLink
                           to={`/categorias/mate`}
                           className={({ isActive }) =>
                              isActive ? activeClassName : undefined
                           }
                        >
                           Mate
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to={`/categorias/materas`}
                           className={({ isActive }) =>
                              isActive ? activeClassName : undefined
                           }
                        >
                           Materas
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to={`/categorias/bombillas`}
                           className={({ isActive }) =>
                              isActive ? activeClassName : undefined
                           }
                        >
                           Bombillas
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
