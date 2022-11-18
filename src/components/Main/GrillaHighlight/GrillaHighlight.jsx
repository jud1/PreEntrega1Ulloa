import ItemHighlight from "./ItemHighlight/ItemHighlight"

const GrillaHighlight = ({lista}) => {
   return (
      <ul className='uk-child-width-1-3@m' data-uk-grid>
         {lista.map(item => 
            <ItemHighlight key={item} random={item}/>
         )}
      </ul>
   )
}

export default GrillaHighlight