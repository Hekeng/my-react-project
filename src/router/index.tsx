import {Routes, Route} from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import ProjectsPage from '../Pages/ProjectsPage'
import ContactsPage from '../Pages/ContactsPage'
import ProjectPage from '../Pages/ProjectPage'
import Page404 from '../Pages/Page404'

export default function RouterWrapper() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      {/* <Route path="/progect"  element={<ProjectPage />} /> */}
      
      <Route path="/projects/:projectPath" element={<ProjectPage />} />

      <Route path="*" element={<Page404  />} />

    </Routes>
  )
}