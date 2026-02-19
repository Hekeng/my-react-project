import React from 'react'
import { cn } from '@/lib/utils'
// Импортируем "адрес" нашего хранилища
import { context } from '../themaController/ThemeProvider'

// import sun from '../../assets/img/icons/sun.svg'
// import moon from '../../assets/img/icons/moon.svg'
import { Moon, Sun } from 'lucide-react'

interface DarkModeBtnProps {
	className?: string
}

const DarkModeBtn = ({ className }: DarkModeBtnProps) => {
	const { isDark, toggleTheme } = React.useContext(context)

	return (
		<button
			className={cn(
				[
					`dark-mode-btn bg-background relative order-9 flex h-[2.6rem] w-[5.1rem] shrink-0 cursor-pointer justify-between rounded-[5rem] p-[0.5rem]`,
					`before:duration-default before:ease-soft before:bg-foreground before:absolute before:top-[1px] before:left-[1px] before:block before:h-[2.4rem] before:w-[2.4rem] before:rounded-full before:transition-[left] before:content-[""]`,
				], // Базовый класс всегда тут
				isDark && 'dark-mode-btn--active before:left-[2.6rem]', // Условие: если true, добавит этот класс
				className // Тот самый пропс, который прилетит из Header
			)}
			onClick={toggleTheme}
		>
			<Sun className='' />
			<Moon className='' />
			{/* <img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' /> */}
		</button>
	)
}

export default DarkModeBtn
