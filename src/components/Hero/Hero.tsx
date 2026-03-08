import DownloadButton from '../downloadButton'
import HeroBackground from '../ui/HeroBackground'

const Hero = () => {
	return (
		<div className='header bg-foreground text-background flex items-center justify-center bg-auto bg-center bg-no-repeat py-[4rem] text-center'>
			<div className='header__wrapper max-w-[66rem] px-[1.5rem]'>
				<HeroBackground className='text-background z-[10] opacity-20' />

				<h1 className='header__title text-h1 z-[800] mb-[2rem] leading-[1.4] font-bold'>
					<strong className='text-[6rem] font-bold'>
						Hi, my name is{' '}
						<em className='text-primary not-italic'>####</em>
					</strong>
					<br />a web developer
				</h1>
				<div className='header__text mb-[4rem] space-y-[0.5em] text-[2rem] leading-[1.333]'>
					<p>with passion for learning and creating.</p>
				</div>
<<<<<<< HEAD
				<DownloadButton url="##" text="Download CV"  />
=======
				<DownloadButton url='/cv.pdf' text='Download ' />
>>>>>>> ae311ea2bba26d0c4cb5f623ce4437d313670fbe
			</div>
		</div>
	)
}

export default Hero
