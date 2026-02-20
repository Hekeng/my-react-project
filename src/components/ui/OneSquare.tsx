interface oneSquareProps {
	delay?: string
	rotate?: string
}

const OneSquare = ({ delay, rotate }: oneSquareProps) => {
	return (
		<rect
			className='shape' // Тут теперь прописана анимация
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
