const Busqueda = ({placeholder}) => {
   return(
      <form class="uk-search uk-search-default">
         <span data-uk-search-icon></span>
         <input class="uk-search-input" type="search" placeholder={placeholder} aria-label="Busqueda"/>
      </form>
   )
}

export default Busqueda