import React from 'react'

function SchowInput() {
  
const [text, setText] = React.useState({text1:"", text2:"", result:""})

function handleChange1(e) {
   setText((prev) => ({
			...prev,
			text1: e.target.value,
		}))
}

function handleChange2(e) {
   setText((prev) => ({
			...prev,
			text2: e.target.value
		}))
}

function showResult() {

   setText((prev) => ({
			...prev,
			result: prev.text1 + prev.text2
		}))
}


function clearResult() {
	setText((prev) => ({
			...prev,
			result: ""
		}))
}

	return (
		<>

			<form  onSubmit={(e) => e.preventDefault()} action="" method="post">
				<label htmlFor="inp-text">Input your text: </label>

				<input type="text" id="inp-text" value={text.text1} onChange={handleChange1}/>

				<br />

				<label htmlFor="inp-text2" >Input your text: </label>

				<input type="text" id="inp-text2" value={text.text2} onChange={handleChange2}/>

				<br />
				<button type="button" onClick={showResult}>SCHOW RESULT</button>
			</form>
			<p>{text.result}</p>
			<button type="button" onClick={clearResult}>CLEAR</button>
			<p className="text-red-500 text-lg font-bold">Hello</p>

		</>

	)
}

export default SchowInput
		// const [showMessage, setShowMessage] = React.useState(true)

// function handleToggle() {
//   setShowMessage(!showMessage)
// }
		// <div>
		// <p style={{color: values.colorA}}>{values.countA}</p>

		// <p style={{color: values.colorB}}>{values.countB}</p>

		// <p style={{width:"30px", height:"20px", border: "1px solid rgba(0,0,0,0.05)", padding: "10px", margin: "20px"}}>{values.total}</p>

		// <button 
		// 	onClick={handleClickFirst}
		// 	style={{color: values.colorA}}
		// >+1</button>

		// <button 
		// 	onClick={handleClickSecond}
		// 	style={{color: values.colorB}}
		// >+5</button>
		// </div>


// import React from 'react'


// function Button() {

//   return <button id="box" className="big" data-type="special">text</button>
  
// }


// function TwoButtons() {
  
// const [values, setValues] = React.useState({ countA: 0, colorA: "red", countB: 0, colorB: "blue", total:0})

// function handleClickFirst() {
// 		setValues((prev) => ({
// 			...prev,
// 			countA: prev.countA + 1,
// 			colorA: "blue",
// 			total: prev.total +1
// 		}))
// 	}

// 	function handleClickSecond() {
// 		setValues((prev) => ({
// 			...prev,
// 			countB: prev.countB + 5,
// 			colorB: "red",
// 			total: prev.total +5
// 		}))
// 	}


// 	return (
// 		<div>
// 		<p style={{color: values.colorA}}>{values.countA}</p>

// 		<p style={{color: values.colorB}}>{values.countB}</p>

// 		<p style={{width:"30px", height:"20px", border: "1px solid rgba(0,0,0,0.05)", padding: "10px",}}>{values.total}</p>

// 		<button 
// 			onClick={handleClickFirst}
// 			style={{color: values.colorA}}
// 		>+1</button>

// 		<button 
// 			onClick={handleClickSecond}
// 			style={{color: values.colorB}}
// 		>+5</button>
// 		</div>




// const [text, setText] = React.useState("Click")

  // function handleClick() {
  //   setText("Clicked")
  // }

  // return <button onClick={handleClick}>{text}</button>
// const PeremHello = function FuncHello() {
//   return <h1>Hello World</h1>
// }



//  export default Button


// const message = "Привет, мир!";
// function greet(name) { return "Hello " + name; }
// console.log(message);
// console.log(greet("Oleg"));