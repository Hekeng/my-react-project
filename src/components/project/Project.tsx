
import { Link } from 'react-router-dom'
import { projectsData } from '../../healpers/ProjectsList'
// import './projectStyle.css'



const Projects = ({title, img, path}) => {
	return ( 
		<li className="project">
			<Link to={path}>
			<img src={img} alt="Project img" className="project__img"/>
			<h3 className="project__title">{title}</h3>
			</Link>
		</li>
	 )
}
 
export default Projects
