import React from 'react'
import { cn } from '@/lib/utils'
// Импортируем "адрес" нашего хранилища
import { context } from '../themaController/ThemeProvider'

import sun from '../../assets/img/icons/sun.svg'
import moon from '../../assets/img/icons/moon.svg'
import { Moon, Sun } from 'lucide-react'

interface DarkModeBtnProps {
	className?: string
}

const DarkModeBtn = ({ className }: DarkModeBtnProps) => {
	const { isDark, toggleTheme } = React.useContext(context)

	return (
		<button
			className={cn(
				'dark-mode-btn raunded-[5rem] bg-background relative order-9 inline-flex min-h-[2rem] min-w-[5rem] shrink-0 justify-between p-[0.5rem]', // Базовый класс всегда тут
				isDark && 'dark-mode-btn--active', // Условие: если true, добавит этот класс
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
