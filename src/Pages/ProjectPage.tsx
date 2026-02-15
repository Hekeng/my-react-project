import gitHubBlack from '../assets/img/icons/gitHub-black.svg'


const ProjectsPage = () => 	{
		return (
			<div className="container">
				<div className="project-details">

					<h1 className="title-1">Video service</h1>

					<img src="" alt="" className="project-details__cover"/>

					<div className="project-details__desc">
						<p>Skills: React, Node.js, MongoDB</p>
					</div>

					<a href="#!" className="btn-outline">
						<img src={gitHubBlack} alt=""/>
						GitHub repo
					</a>

				</div>
			</div>
	 )
}
 
export default ProjectsPage