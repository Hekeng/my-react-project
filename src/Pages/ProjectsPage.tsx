import Header from '../components/header/Header'
// import one from '../assets/img/projects/01.jpg'
// import two from '../assets/img/projects/02.jpg'
// import three from '../assets/img/projects/03.jpg'
// import four from '../assets/img/projects/04.jpg'
// import five from '../assets/img/projects/05.jpg'
// import six from '../assets/img/projects/06.jpg'

import Project from '../components/project/Project'

import {projectsData} from '../healpers/ProjectsList'

const ProjectsPage = () => {
	return ( 
		<>
			<Header />	
			<main className="section">
				<div className="container">
					<h2 className="title-1">Projects</h2>
					<ul className="projects">
						{
							projectsData.map((projectData)=>{
								return (
									<Project 
										key={projectData.id} 
										title={projectData.title} 
										img={projectData.img}/>
									)
								}
							)
						}

					</ul>
				</div>
			</main>
		</>
	 );
}
 
export default ProjectsPage;