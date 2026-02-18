// import './style/main.css'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import RouterWrapper from './router'

import Hero from './components/Hero/Hero'
import Footer from './components/footer/Footer'
import { ThemeProvider } from './components/themaController/ThemeProvider'
import Header from './components/header/Header'

function App() {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider>
					<div className='bg-background text-foreground selection:bg-primary/30 flex min-h-screen flex-col'>
						<Header />
						<main className='flex-1'>
							<RouterWrapper />
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</BrowserRouter>
		</>
	)
}

export default App
