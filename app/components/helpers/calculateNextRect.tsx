const MAX_KEY_VALUE = 12
const KEY_STEP = 1
const MAX_OFFSET_ANGLE = 360
const OFFSET_ANGLE =15
const MAX_DELAY = 3
const DELAY_STEP = 0

export default function calculateNextRect(prev) {
	
	if (prev.length === 0) return { key: MAX_KEY_VALUE+1, angle: OFFSET_ANGLE, delay: DELAY_STEP }

	const lastObj = prev[prev.length - 1]

	const newKey = lastObj.key<=MAX_KEY_VALUE ? lastObj.key + KEY_STEP :  0

	const newAngle = lastObj.angle<=MAX_OFFSET_ANGLE ? lastObj.angle + OFFSET_ANGLE : 0

	const newDelay =  lastObj.delay<=MAX_DELAY ?  lastObj.delay + DELAY_STEP : 0

	return {key: newKey, angle: newAngle, delay: newDelay}
}