// import './navbarStyle.css'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import NavItem from './HeaderItem'

import { menuItems } from '../helpers/ProjectsList'
import DarkModeBtn from '../darkModeBtn/DarkModeBtn'

const Header = () => {
	return (
		<header
			className={cn([
				`nav border-dark bg-background text-primary border-b border-solid px-[3rem] py-[0.5rem] tracking-normal`,
			])}
		>
			{/* <div className="container"> */}
			<div
				className={cn([
					`nav-row flex w-full flex-wrap items-center justify-end gap-x-[3rem] gap-y-[2rem]`,
				])}
			>
				<Link
					to='/'
					className='logo text-primary mr-auto text-[2.5rem]'
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
