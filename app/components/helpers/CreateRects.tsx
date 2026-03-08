export default function CreateRects(){

	let newKey = 0
	let newAngle = 0
	let newDelay = 0
	const newRects = []


	for (let i = 0; i < 6; i++) {
		newKey = i
		newAngle = newAngle + 15
		newDelay = newDelay + 0.6

		newRects.push({key: newKey, angle: newAngle, delay: newDelay
			// , startColor: 'active'
		 })
		
	}

	return newRects

}
 
// export default CreateRects;