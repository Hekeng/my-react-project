import Header from '../components/Hero/Hero'
import Project from '../components/project/Project'
import { projectsData } from '../components/helpers/ProjectsList'

const ProjectsPage = () => {
	return (
		<>
			{/* <Header />	 */}
			<main className='section'>
				<div className='container'>
					<h2 className='title-1'>Projects</h2>
					<ul className='projects'>
						{projectsData.map((projectData) => {
							return (
								<Project
									key={projectData.id}
									title={projectData.title}
									img={projectData.img}
									path={projectData.path}
								/>
							)
						})}
					</ul>
				</div>
			</main>
		</>
	)
}

export default ProjectsPage
