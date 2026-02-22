import { cn } from '@/lib/utils'
import Socials from '@/components/socials/Socials'

interface footerProps{
	className: string,
}


const Footer = ({className}:footerProps ) => {
	return ( 
		<footer className={cn('footer', className)}>
			{/* <div className="container"> */}
				<div className="footer__wrapper flex flex-col items-center gap-x-[3rem]">
					<ul className="social flex gap-y-[3rem] gap-x-[1rem] items-center ">
						<Socials className='w-4 h-4 text-background' />
					</ul>
					<div className="copyright text-small ">
						<p>© hexen</p>
					</div>
				</div>
			{/* </div> */}
		</footer>
	 );
}
 
export default Footer;