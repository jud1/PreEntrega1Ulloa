import Item from "../Item/Item"

const ItemList = ({ arrItems }) => {
   return (
      <ul
         className="uk-child-width-1-3@m uk-child-width-1-2@s"
         data-uk-grid=""
         data-uk-height-match="target: .equalizer-height"
      >
         { arrItems.map(item => (
            <li key={item.id}>
               <Item item={item} />
            </li>
         )) }
      </ul>
   )
}

export default ItemList
