// import './navbarStyle.css'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import NavItem from './HeaderItem'

import { menuItems } from '../helpers/ProjectsList'
import DarkModeBtn from '../darkModeBtn/DarkModeBtn'

interface headerProps {
	className: string
}

const Header = ({ className }: headerProps) => {
	return (
		<header className={cn([`nav`, className])}>
			{/* <div className="container"> */}
			<div
				className={cn([
					`nav-row flex w-full flex-wrap items-center justify-end gap-x-[3rem] gap-y-[2rem]`,
				])}
			>
				<Link
					to='/'
					className='logo text-primary hover:text-primary/80 active:text-primary duration-base ease-soft mr-auto text-[2.5rem] transition-all hover:-translate-y-[0.2rem] active:translate-y-0'
				>
					<strong className='font-bold'>Deweloper</strong> portfolio
				</Link>

				<DarkModeBtn className='' />
				<ul className='nav-list text-primary font-poppins flex flex-wrap items-center gap-x-[1rem] gap-y-[4rem] text-[1.6rem] font-medium'>
					{menuItems.map((menuItem) => {
						return (
							<NavItem key={menuItem.label} to={menuItem.path}>
								{menuItem.label}
							</NavItem>
						)
					})}
				</ul>
			</div>
			{/* </div> */}
		</header>
	)
}

export default Header
