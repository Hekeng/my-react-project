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
			<>
				<div className='project-details m-0 m-auto flex max-w-[87rem] flex-col items-center text-center'>
					<h1 className='title-1 text-h1 p-1'>{item.title}</h1>

					<img
						src={item.bigImg}
						alt=''
						className='project-details__cover m-top-[4rem] max-w-full rounded-[10px] shadow-sm'
					/>

					<div className='project-details__desc m-top-[3rem] text-h5 leading-1.5 font-bold'>
						<p className='p-2'>{item.skills}</p>
					</div>

					{
						// item.gitHub &&
						<ExternalLinkButton
							url={item.gitHub}
							text='Repository'
						/>
					}
				</div>
			</>
		)
	} else {
		return <Page404 />
	}
}

export default ProjectsPage
