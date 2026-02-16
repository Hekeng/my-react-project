import { NavLink } from 'react-router-dom'

type NavItemProps = {
  to: string
  children: React.ReactNode
};

const NavItem = ({ to, children }: NavItemProps) => (

	<li className="nav-list__item">
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? 'nav-list__link nav-list__link--active' : 'nav-list__link'
			}
			>
			{children}
		</NavLink>
	</li>
);

 
export default NavItem;
