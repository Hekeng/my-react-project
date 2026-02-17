import './navbarStyle.css'
import {Link} from 'react-router-dom'

import NavItem from './NavItem';

import {menuItems} from '../../healpers/ProjectsList'
import DarkModeBtn from '../darkModeBtn/DarkModeBtn ';



const Navbar = () => {
	return (  
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<Link 
						to ="/" 
						className="logo"><strong>Deweloper</strong> portfolio
					</Link>
					
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
