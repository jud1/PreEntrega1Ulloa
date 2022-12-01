const precioConDescuento = (precio, descuento) => {
   return Math.trunc(precio * (1 - descuento / 100))
}
const Item = ({dataItem}) => {
   const { modelo, marca, galeria, precio, descuento } = dataItem.fields
   return(
      <div className="uk-card uk-card-default uk-padding-small">
         <figure
            className="uk-height-medium uk-background-contain"
            style={{ backgroundImage: `url(${galeria[0].fields.file.url})` }}
         ></figure>
         <div
            className="uk-card-body uk-padding-small"
            data-uk-margin="margin: uk-margin-small-top uk-margin-remove-bottom"
         >
            <small>{marca} - {modelo}</small>
            <div className="uk-flex uk-flex-middle">
               <span className="uk-h4 uk-display-block uk-margin-remove-bottom">
                  $
                  {precioConDescuento(precio, descuento).toLocaleString(
                     "es-CL"
                  )}{" "}
               </span>
               {descuento && <span className="uk-badge uk-margin-small-left">- {descuento}%</span>}
            </div>
            <div
               className="uk-grid-small uk-child-width-auto"
               data-uk-grid=""
            >
               <div>
                  <a href="./" className="uk-button uk-button-primary">
                     Ver Producto
                  </a>
               </div>
               <div>
                  <a href="./" className="uk-button uk-button-primary">
                     +
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Item