import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { precioConDescuento } from "../../assets/funciones"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
   const {
      modelo,
      precio,
      descuento,
      galeria,
      marca,
      categorias,
      stock,
      caracteristicas,
      descripcion,
   } = producto
   return (
      <div className="uk-animation-fade uk-animation-fast" data-uk-grid="">
         <div className="uk-width-1-2@m">
            <div data-uk-sticky="media: @m; end: footer; offset: 100">
               <h1 className="uk-width-1-1 uk-h2 uk-text-bold">{modelo}</h1>
               <div data-uk-slider="finite: true">
                  <ul className="uk-slider-items">
                     {galeria.map((imagen) => (
                        <li className="uk-width-4-5" key={imagen.id}>
                           <img src={imagen.file.url} alt={imagen.title} />
                        </li>
                     ))}
                  </ul>
                  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
               </div>
            </div>
         </div>
         <div className="uk-width-1-2@m">
            <h4 className="uk-display-block uk-margin-remove">
               <strong>Marca: {marca}</strong>
            </h4>
            <ul className="uk-grid uk-grid-small uk-margin-small-top">
               {categorias.map((categoria, index) => (
                  <>
                     {index!==0 && <span>/</span>}
                     <li className="uk-width-auto" key={categoria}>
                        <strong  className="uk-text-bold">{index!==0} {categoria}</strong>
                     </li>
                  </>
               ))}
            </ul>
            <div className="uk-flex uk-flex-middle uk-margin-top">
               <h3 className="uk-h2 uk-text-bold uk-margin-remove" style={{lineHeight: 1}}>
                  <small>$</small>
                  {precioConDescuento(precio, descuento)}
               </h3>
               <span className="uk-label uk-margin-small-left">{descuento}% DCTO</span>
            </div>
            <div className="uk-margin-top">
               <ItemCount min={1} stock={stock} />
            </div>
            <table
               className="uk-table uk-table-small uk-table-divider uk-margin-medium-top"
               style={{ border: "1px solid #e5e5e5" }}
            >
               <tbody>
                  {caracteristicas.map((caracteristica) => (
                     <tr key={caracteristica.split(":")[0]}>
                        <td>{caracteristica.split(":")[0]}:</td>
                        <td>{caracteristica.split(":")[1]}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className="uk-margin-medium-top">
               {documentToReactComponents(descripcion)}
            </div>
         </div>
      </div>
   )
}

export default ItemDetail
