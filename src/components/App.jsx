import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import GrillaHighlight from './Main/GrillaHighlight/GrillaHighlight'
import Main from './Main/Main'
import SlideshowHero from './Main/SlideshowHero/SlideshowHero'

const App = () => {
	return (
		<>
			<Header/>
			<Main>
				<SlideshowHero/>
				<div className='uk-container'>
					<GrillaHighlight lista={[4,5,6]} />
					<GrillaHighlight lista={[7,8,9]} />
				</div>
			</Main>
			<Footer/>
		</>
	)
}

export default App
