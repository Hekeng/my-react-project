import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

type NavItemProps = {
	to: string
	children: React.ReactNode
}

const HeaderItem = ({ to, children }: NavItemProps) => (
	<li className='nav-list__item'>
		<NavLink
			to={to}
			className={({ isActive }) =>
				cn(
					'nav-list__link text-primary duration-default ease-soft transition-opacity hover:opacity-80',
					isActive &&
						'nav-list__link--active before:bg-accent-foreground relative before:absolute before:top-full before:left-0 before:block before:h-[0.2rem] before:w-full'
				)
			}
		>
			{children}
		</NavLink>
	</li>
)

export default HeaderItem
