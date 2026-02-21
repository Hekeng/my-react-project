import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface oneSquareProps {
	delay?: string
	rotate?: string
	className?: string
}

const OneSquare = ({ delay, rotate, className }: oneSquareProps) => {

	const [colorClassName, setColorClassName] = useState('active')

	function changeColor () {
		setColorClassName(()=> {
			return ''
		})
	}

	useEffect (() => {
		const timer = setTimeout(() => {
			changeColor();
		}, 600); 
		return () => clearTimeout(timer);
	}, []);



	return (
		<rect
			className={cn(className, "shape", colorClassName)}// Тут теперь прописана анимация
			x='100'
			y='100'
			width='400'
			height='400'
			transform={`rotate(${rotate} 300 300)`}
			style={{
				stroke: 'currentColor',
				fill: 'none',
				strokeWidth: '1',
				animationDelay: delay, 
			}}
		/>
	)
}

export default OneSquare
