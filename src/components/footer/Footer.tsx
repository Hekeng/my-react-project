// import './footerStyle.css'

import vk from '../../assets/img/icons/vk.svg'
import git from '../../assets/img/icons/gitHub.svg'

const Footer = () => {
	return ( 
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="#!">
								<img src={vk} alt="Link"/>
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={git} alt="Link"/>
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© webdev-freelancer.com</p>
					</div>
				</div>
			</div>
		</footer>
	 );
}
 
export default Footer;