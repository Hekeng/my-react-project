import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { HelloText, HelloNumber } from "./components/Hello"
// import { ButtonText } from './components/HelloButton'

import SchowInput from './components/TwoButtons'

function App() {
  return (
  
      <div>
        <SchowInput />
      </div>
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
    // <>
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
    // </>