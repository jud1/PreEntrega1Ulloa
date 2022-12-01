import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import Main from './Main/Main'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'

const App = () => {
	return (
		<>
			<NavBar/>
			<Main>
				<ItemDetailContainer/>
				<ItemListContainer greeting={"Jud Store"}/>
			</Main>
			<Footer/>
		</>
	)
}

export default App
