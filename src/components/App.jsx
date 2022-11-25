import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import SlideshowHero from './SlideshowHero/SlideshowHero'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const App = () => {
	return (
		<>
			<Header/>
			<Main>
				<SlideshowHero/>
				<ItemListContainer/>
			</Main>
			<Footer/>
		</>
	)
}

export default App
