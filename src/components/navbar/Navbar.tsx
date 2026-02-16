import './navbarStyle.css'
import sun from '../../assets/img/icons/sun.svg'
import moon from '../../assets/img/icons/moon.svg'
import NavItem from './NavItem';

import {menuItems} from '../../healpers/ProjectsList'

const Navbar = () => {
	return (  
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<a href="./index.html" className="logo"><strong>Deweloper</strong> portfolio</a>

					<button className="dark-mode-btn">
						<img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
						<img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
					</button>
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
