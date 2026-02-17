// import './style/main.css'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import RouterWrapper from './router'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { ThemeProvider } from './components/themaController/ThemeProvider'


function App() {

	return (

	<>
		<BrowserRouter>
			<ThemeProvider>
				<Navbar />
					<RouterWrapper />
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	</>
)
}

export default App
