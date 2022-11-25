const SlideshowHero = () => {
   const lista = [1, 2, 3]
   return (
      <div data-uk-slideshow="animation: push; min-height: 300; max-height: 500">
         <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
            <ul className="uk-slideshow-items">
            {lista.map(item => 
               <li key={item}>
                  <img src={`https://picsum.photos/1920/1080?random=${item}&grayscale`} alt="" data-uk-cover />
               </li>
            )}
            </ul>
         </div>
         <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
   )
}

export default SlideshowHero