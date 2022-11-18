import ItemHighlight from "./ItemHighlight/ItemHighlight"

const GrillaHighlight = ({lista}) => {
   return (
      <ul className='uk-child-width-1-3@m' data-uk-grid data-uk-height-match="target: .uk-card-body">
         {lista && lista.length>0 &&
            lista
               .map(item => 
                  <ItemHighlight key={item.id} producto={item}/>
               )
         }
      </ul>
   )
}

export default GrillaHighlight