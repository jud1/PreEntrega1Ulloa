import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './Error404/Error404'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import Main from './Main/Main'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar/>
				<Main>
					<Routes>
						<Route exact path='/' element={<ItemListContainer/>} />
						<Route exact path='/categorias/:categoria' element={<ItemListContainer/>} />	
						<Route exact path='/productos/:id' element={<ItemDetailContainer/>} />	
						<Route exact path='/cart/' element={<Cart/>} />	
						<Route path='*' element={<Error404/>}/>
					</Routes>
				</Main>
				<Footer/>
			</BrowserRouter>
		</>
	)
}

export default App
