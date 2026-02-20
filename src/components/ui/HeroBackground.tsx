import { cn } from '@/lib/utils'
// import type { ReactNode } from 'react'

import OneSquare from '@/components/ui/OneSquare'
import { useState } from 'react'

interface IconsProps {
	className?: string
	// children?: ReactNode
}

const [rects, setRects] = useState([
	{ id: 0, rotate: 0, delay: 0 },
	{ id: 1, rotate: 15, delay: 0.5 },
])

const DownloadHeroBackground = ({ className }: IconsProps) => {
	let rects = []
	let rotate = 0
	let delay = 0

	for (let i = 0; i < 12; i++) {
		rects.push(
			<OneSquare key={i} delay={`${delay}s`} rotate={`${rotate}`} />
		)

		if (rotate >= 360) {
			rotate = 0
		} else {
			rotate = rotate + 15
		}

		if (delay >= 2) {
			delay = 0
		} else {
			delay = delay + 0.5
		}
	}

	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				stroke='currentColor'
				className={cn(
					// 'bg-foreground text-background relative flex items-center justify-center bg-auto bg-center bg-no-repeat py-[4rem] text-center',
					'pointer-events-none absolute inset-0 z-0 h-full w-full fill-none stroke-1',
					className
				)}
				viewBox='0 0 600 600'
				style={{}}
			>
				{/* {rects} */}
			</svg>
		</>
	)
}

export default DownloadHeroBackground
{
	/* {renderRects()} */
}
// function renderRects() {
// 	let rects = []
// 	for (let i = 0; i < 12; i++) {
// 		rects.push(
// 			<rect
// 				key={i}
// 				transform={`rotate(${i * 15} 300 300)`}
// 				x='100'
// 				y='100'
// 				width='400'
// 				height='400'
// 				style={{ animationDelay: `${i * 0.2}s` }}
// 				/* ... остальные атрибуты ... */
// 			/>
// 		)
// 	}
// 	return rects
// }
{
	/* 
			{Array.from({ length: 12 }).map((_, i) => (
					<rect
					key={i}
					className="shape"
					x="100" y="100" width="400" height="400"
					transform={`rotate(${i * 15} 300 300)`}
					style={{ 
						// Управляем стилями через пропсы или Tailwind
						stroke: "currentColor", 
						fill: "none",
						strokeWidth: "2"
					}}
					/>
				))} */
}

{
	/* <rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(0 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(15 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(30 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(45 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(60 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(75 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(90 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(105 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(120 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(135 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(150 300 300)" />
				<rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(165 300 300)" /> */
}
{
	/* <div className='absolute z-10'>{children}</div> */
}
