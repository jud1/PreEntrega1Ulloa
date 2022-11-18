import TextTruncate from 'react-text-truncate'

const ItemHighlight = ({producto}) => {
   const {title, description, image} = producto

   return(
      <li className="product-card">
         <div className="uk-card uk-card-default uk-padding-small">
            <figure className="uk-height-medium uk-background-contain" style={{backgroundImage: `url(${image})`}}></figure>
            <div className="uk-card-body uk-padding-small">
               <h3 className="uk-card-title">
                  <TextTruncate
                     line={1}
                     element="span"
                     truncateText="…"
                     text={title}
                  />
               </h3>
               <TextTruncate
                  line={4}
                  element="p"
                  truncateText="…"
                  text={description}
                  textTruncateChild={<a href="./">Ver más</a>}
               />
            </div>
         </div>
      </li>
   )
}

export default ItemHighlight