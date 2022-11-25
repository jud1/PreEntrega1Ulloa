const Busqueda = ({placeholder}) => {
   return(
      <form className="uk-search uk-search-default">
         <span data-uk-search-icon></span>
         <input className="uk-search-input" type="search" placeholder={placeholder} aria-label="Busqueda"/>
      </form>
   )
}

export default Busqueda