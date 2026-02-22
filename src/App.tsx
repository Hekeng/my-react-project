// import './style/main.css'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import RouterWrapper from './router'
import Footer from './components/footer/Footer'
import { ThemeProvider } from './components/themaController/ThemeProvider'
import Header from './components/header/Header'

function App() {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider>
					<div className='bg-background text-foreground selection:bg-primary/30 flex min-h-screen flex-col'>
						<Header className='border-dark bg-background text-primary border-b border-solid px-[3rem] py-[0.5rem] tracking-normal sticky top-0 z-[1000]'/>
						<main className='flex flex-col flex-1'>
							<RouterWrapper />
						</main>
						<Footer className='relative z-1000 mt-auto py-[2rem] bg-foreground text-background ' />
					</div>
				</ThemeProvider>
			</BrowserRouter>
		</>
	)
}

export default App
