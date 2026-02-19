// import './headerStyle.css'

import { cn } from '@/lib/utils'
import headerBg from '@/assets/img/header-bg.png'
import { Link } from 'react-router-dom'
import DownloadButton from '../downloadButton'

const Hero = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${headerBg})`,
			}}
			className={cn([
				'header bg-foreground text-background flex items-center justify-center bg-auto bg-center bg-no-repeat py-[4rem] text-center',
			])}
		>
			<div className='header__wrapper max-w-[66rem] px-[1.5rem]'>
				<h1 className='header__title text-h1 mb-[2rem] leading-[1.4] font-bold'>
					<strong className='text-[6rem] font-bold'>
						Hi, my name is{' '}
						<em className='text-primary not-italic'>####</em>
					</strong>
					<br />a web developer
				</h1>
				<div className='header__text mb-[4rem] space-y-[0.5em] text-[2rem] leading-[1.333]'>
					<p>with passion for learning and creating.</p>
				</div>
					<DownloadButton />
			</div>
		</div>
	)
}

export default Hero
