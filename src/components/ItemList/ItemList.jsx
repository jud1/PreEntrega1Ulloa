import Item from "../Item/Item"

const ItemList = ({ arrItems }) => {
   return (
      <div className="uk-container">
         <ul
            className="uk-child-width-1-3@m uk-child-width-1-2@s"
            data-uk-grid=""
         >
            {arrItems.map((item) => (
               <li key={item.sys.id}>
                  <Item dataItem={item} />
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ItemList
