import './navbarStyle.css'

import NavItem from './NavItem';

import {menuItems} from '../../healpers/ProjectsList'
import DarkModeBtn from '../darkModeBtn/DarkModeBtn ';

const Navbar = () => {
	return (  
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<a href="./index.html" className="logo"><strong>Deweloper</strong> portfolio</a>
					
					<DarkModeBtn/>

					<ul className="nav-list"> 
						{
							menuItems.map((menuItem)=> {
								return (
										<NavItem 
											key={menuItem.label}
											to={menuItem.path}> 
											{menuItem.label} 
										</NavItem>
								)
							})
						}

					</ul>
				</div>
			</div>
		</nav>
	);
}
 
export default Navbar;
