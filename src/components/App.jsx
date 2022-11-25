import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import Main from './Main/Main'
import SlideshowHero from './SlideshowHero/SlideshowHero'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const App = () => {
	return (
		<>
			<NavBar/>
			<Main>
				<SlideshowHero/>
				<ItemListContainer greeting={"Jud Store"}/>
			</Main>
			<Footer/>
		</>
	)
}

export default App
