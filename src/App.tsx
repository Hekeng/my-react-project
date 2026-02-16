import './style/main.css'

import { BrowserRouter } from 'react-router-dom'
import RouterWrapper from './router'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {
	return (

	<>
		<BrowserRouter>
			<Navbar />
				<RouterWrapper />
			<Footer />
		</BrowserRouter>
	</>
)
}

export default App
