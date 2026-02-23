import Header from '../components/Hero/Hero'
import Project from '../components/project/Project'
import { projectsData } from '../components/helpers/ProjectsList'
import { cn } from '@/lib/utils'

const ProjectsPage = () => {
	return (
		<>
			{/* <Header />	 */}
			<main className='section'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects flex flex-wrap justify-center gap-x-[3rem] gap-y-[2rem]'>
					{projectsData.map((projectData) => {
						return (
							<Project
								key={projectData.id}
								title={projectData.title}
								img={projectData.img}
								path={projectData.path}
								className={cn([
									'project bg-background max-w-[37rem]',
									'hover:text-primary/80 active:text-primary duration-base ease-soft mr-auto text-[2.5rem] transition-all hover:-translate-y-[0.2rem] active:translate-y-0',
								])}
							/>
						)
					})}
				</ul>
			</main>
		</>
	)
}

export default ProjectsPage
