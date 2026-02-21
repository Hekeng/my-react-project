// import React from 'react'

import ExternalLinkButton from '../components/ExternalLinkButton/ExternalLinkButton'

import { projectsData } from '../components/helpers/ProjectsList'
import { useParams } from 'react-router-dom'
import Page404 from './Page404'

const ProjectsPage = () => {
	const { projectPath } = useParams()
	const item = projectsData.find((element) => projectPath === element.path)

	if (item) {
		return (
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{item.title}</h1>

					<img
						src={item.bigImg}
						alt=''
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>{item.skills}</p>
					</div>

					{
						// item.gitHub &&
						<ExternalLinkButton
							url={item.gitHub}
							text='Repository'
						/>
					}
				</div>
			</div>
		)
	} else {
		return <Page404 />
	}
}

export default ProjectsPage
