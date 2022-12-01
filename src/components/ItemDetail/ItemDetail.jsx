import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ItemDetail = ({producto}) => {
   console.log('Item detail load')
   return (
      <div className="" data-uk-grid="">
         <h1 className="uk-width-1-1">{producto.fields.modelo}</h1>
         <div className="uk-width-1-2@m" data-uk-slider="finite: true">
            <ul className="uk-slider-items">
               {producto.fields.galeria.map((imagen) => (
                  <li className="uk-width-4-5" key={imagen.sys.id}>
                     <img
                        src={imagen.fields.file.url}
                        alt={imagen.fields.title}
                     />
                  </li>
               ))}
            </ul>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
         </div>
         <div
            className="uk-width-1-2@m"
         >
            <span className="uk-display-block">
               Marca: {producto.fields.marca}
            </span>
            <div
               className="uk-overflow-auto uk-margin-top"
               style={{ maxHeight: "200px" }}
            >
               {documentToReactComponents(producto.fields.descripcion)}
            </div>
         </div>
      </div>
   )
}

export default ItemDetail