import React, { Component } from 'react'
import { useState } from 'react'

// import './style/App.css'
import './style/main.css'


// import UmbrellaLogo from './components/logo/logo'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ProjectsPage from './Pages/ProjectsPage'
import ProjectPage from './Pages/ProjectPage'
import ContactsPage from './Pages/ContactsPage'

// import Header from '../components/header/Header'

	{/* < UmbrellaLogo />
	<SchowInput /> */}

function App() {
	return (

	<>
		<Navbar />
		
		{/* <ProjectsPage /> */}
		<ProjectPage />
		{/* <ContactsPage /> */}
		<Footer />

	</>
)
}

export default App

		{/* {React.createElement("br", null, null)} 

		<button>CLICK</button> */}

		{/* {React.createElement("h1", null, "Hello")}

		{React.createElement("br", null, null)}

		{React.createElement("button", { id: "btn" }, "Click")}

		{React.createElement("br", null, null)} 

		{React.createElement(
		  "div",
		  null,
		  React.createElement("h1", null, "Title")
		)} */}
	{/* // <>
	//   <div>
	//     <a href="https://vite.dev" target="_blank">
	//       <img src={viteLogo} className="logo" alt="Vite logo" />
	//     </a>
	//     <a href="https://react.dev" target="_blank">
	//       <img src={reactLogo} className="logo react" alt="React logo" />
	//     </a>
	//   </div>
	//   <h1>Vite + React</h1>
	//   <div className="card">
	//     <button onClick={() => setCount((count) => count + 1)}>
	//       count is {count}
	//     </button>
	//     <p>
	//       Edit <code>src/App.tsx</code> and save to test HMR
	//     </p>
	//   </div>
	//   <p className="read-the-docs">
	//     Click on the Vite and React logos to learn more
	//   </p>
	// </> */}