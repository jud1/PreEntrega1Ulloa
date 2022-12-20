const SlideshowHero = () => {
   return (
      <div data-uk-slideshow="autoplay:true; autoplay-interval: 3000; animation: push; min-height: 300; max-height: 400">
         <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
         >
            <ul className="uk-slideshow-items">
               <li>
                  <img
                     src="./images/nintendo.jpg"
                     alt="Nintendo"
                     data-uk-cover
                  />
               </li>
               <li>
                  <img
                     src="./images/playstation.jpg"
                     alt="Playstation"
                     data-uk-cover
                  />
               </li>
               <li>
                  <img src="./images/xbox.jpg" alt="Xbox" data-uk-cover />
               </li>
            </ul>
         </div>
         <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
   );
};

export default SlideshowHero;
