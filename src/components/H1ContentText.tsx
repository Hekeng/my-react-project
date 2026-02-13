import React from 'react'

function TwoButtons() {
  
const [values, setValues] = React.useState({ countA: 0, colorA: "red", countB: 0, colorB: "blue", total:0})

function handleClickFirst() {
		setValues((prev) => ({
			...prev,
			countA: prev.countA + 1,
			colorA: "blue",
			total: prev.total +1
		}))
	}

	function handleClickSecond() {
		setValues((prev) => ({
			...prev,
			countB: prev.countB + 5,
			colorB: "red",
			total: prev.total +5
		}))
	}


	return (
		<div>
		<p style={{color: values.colorA}}>{values.countA}</p>

		<p style={{color: values.colorB}}>{values.countB}</p>

		<p style={{width:"30px", height:"20px", border: "1px solid rgba(0,0,0,0.05)", padding: "10px", margin: "20px"}}>{values.total}</p>

		<button 
			onClick={handleClickFirst}
			style={{color: values.colorA}}
		>+1</button>

		<button 
			onClick={handleClickSecond}
			style={{color: values.colorB}}
		>+5</button>
		</div>
	)
}

export default TwoButtons



// import React from 'react'


// function Button() {

//   return <button id="box" className="big" data-type="special">text</button>
  
// }







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