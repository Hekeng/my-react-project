import { cn } from '@/lib/utils'
import Socials from '@/components/socials/Socials'

interface footerProps {
	className: string
}

const Footer = ({ className }: footerProps) => {
	return (
		<footer className={cn('footer', className)}>
			{/* <div className="container"> */}
			<div className='footer__wrapper flex flex-col items-center gap-x-[3rem]'>
				<ul className='social flex items-center gap-x-[1rem] gap-y-[3rem]'>
					<Socials className='text-background hover:text-primary/80 active:text-primary duration-base ease-soft h-4 w-4 transition-all hover:-translate-y-[0.2rem] active:translate-y-0' />
				</ul>
				<div className='copyright text-small'>
					<p className='duration-base ease-soft cursor-pointer transition-all hover:-translate-y-[0.2rem] active:translate-y-0'>
						© hexen
					</p>
				</div>
			</div>
			{/* </div> */}
		</footer>
	)
}

export default Footer
