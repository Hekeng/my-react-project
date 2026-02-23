import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
// import { projectsData } from '@/components/healpers/ProjectsList'
// import './projectStyle.css'

interface ProjectProps {
	title?: string
	img?: string
	path?: string
	className?: string
}

const Projects = ({ title, img, path, className }: ProjectProps) => {
	return (
		<li className={cn(`${className} flex-grow`)}>
			<Link to={path}>
				<img src={img} alt='Project img' className='project__img' />
				<h3 className='project__title'>{title}</h3>
			</Link>
		</li>
	)
}

export default Projects
