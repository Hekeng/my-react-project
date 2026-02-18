// import './navbarStyle.css'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import NavItem from './HeaderItem'

import { menuItems } from '../../healpers/ProjectsList'
import DarkModeBtn from '../darkModeBtn/DarkModeBtn '

const Header = () => {
	return (
		<header
			className={cn([
				`nav border-dark bg-foreground text-primary border-b border-solid px-[2rem] tracking-normal`,
				// 'ins sticky inset-x-0 top-0 inline-flex flex-row items-center justify-center',
				// `border-b-border-dark bg-foreground border px-[3rem] text-primary`,
			])}
		>
			{/* <div className="container"> */}
				<div
					className={cn([
						`flex w-full flex-wrap items-center justify-end gap-x-[3rem] gap-y-[2rem]`,
					])}
				>
					<Link to='/' className="logo mr-auto text-primary text-[2.5rem] ">
						<strong>Deweloper</strong> portfolio
					</Link>
					<DarkModeBtn className='flex flex-1 justify-end' />
					<ul className='flex-none'>
						{menuItems.map((menuItem) => {
							return (
								<NavItem
									key={menuItem.label}
									to={menuItem.path}
								>
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
