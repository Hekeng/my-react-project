import { cn } from '@/lib/utils'
// import type { ReactNode } from 'react'

import OneSquare from '@/components/ui/OneSquare'
import { useEffect, useState } from 'react'
import CreateRects from '@/components/helpers/CreateRects'
import calculateNextRect from '@/components/helpers/calculateNextRect'

interface IconsProps {
	className?: string
	// children?: ReactNode
}

const UPDATE_DELAY = 600


const DownloadHeroBackground = ({ className }: IconsProps) => {

const [rects, setRects] = useState(CreateRects)

	function chengeRects (){
		setRects((prev) => {

			const nextRect = calculateNextRect(prev);	
	 		return [...prev.slice(1),nextRect]
		})

		
	}

useEffect(() => {
	const timer = setTimeout(() => {
		chengeRects();
	}, UPDATE_DELAY); 

	return () => clearTimeout(timer);
}, [rects]);



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
				{
					rects.map((item) => {
						return (
							<OneSquare 
								className='opacity-0'
								key={item.key} 
								delay={`${item.delay}s`} 
								rotate={`${item.angle}`} 
								/>
						)
					})
				}
			</svg>
		</>
	)
}

export default DownloadHeroBackground

	// /* <rect className="shape" x="100" y="100" width="400" height="400" transform="rotate(0 300 300)" />
