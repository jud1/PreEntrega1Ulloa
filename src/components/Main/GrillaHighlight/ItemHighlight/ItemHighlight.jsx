const ItemHighlight = ({random}) => {
   return(
      <li>
         <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
               <img src={`https://picsum.photos/1920/1080?random=${random}&grayscale`} width="1800" height="1200" alt=""/>
            </div>
            <div className="uk-card-body">
               <h3 className="uk-card-title">Media Top</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
         </div>
      </li>
   )
}

export default ItemHighlight