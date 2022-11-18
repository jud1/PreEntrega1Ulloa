import React, { useState, useEffect } from "react"
import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import GrillaHighlight from './Main/GrillaHighlight/GrillaHighlight'
import Main from './Main/Main'
import SlideshowHero from './Main/SlideshowHero/SlideshowHero'

const App = () => {

	const [productos, setProductos] = useState([])
   
   const fetchProductos = () => {
      fetch('https://fakestoreapi.com/products/category/electronics')
         .then(response => response.json())
				.then(json => setProductos(json))
   }
   
   useEffect(() => fetchProductos(), [])

	return (
		<>
			<Header/>
			<Main>
				<SlideshowHero/>
				<div className='uk-container'>
					<GrillaHighlight lista={productos} />
				</div>
			</Main>
			<Footer/>
		</>
	)
}

export default App
