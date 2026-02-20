import React from 'react'

// 1. Определяем систему (это ты сделал верно)
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// 2. Создаем контекст. В скобках — "заглушка" на случай, если кто-то
// попытается использовать контекст без Провайдера.
const context = React.createContext({
	isDark: isSystemDark,
	toggleTheme: () => {}, // Просто пустая функция для примера
})

interface ThemeProviderProps {
	children: React.ReactNode // Специальный тип для всего, что можно вставить в JSX
}
// 3. Компонент-провайдер. ОБЯЗАТЕЛЬНО принимаем { children }
const ThemeProvider = ({ children }: ThemeProviderProps) => {
	
	const [isDark, setIsDark] = React.useState(isSystemDark)

	// Функция-переключатель. Теперь она простая как дверь.
	function toggleTheme() {
		setIsDark((prev) => !prev) // Меняем true на false и наоборот
	}

	// Здесь можно добавить "эффект", который вешает класс на body
	React.useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [isDark]) // Следим за изменением isDark

	return (
		// Передаем в value текущее состояние и функцию для его изменения
		<context.Provider value={{ isDark, toggleTheme }}>
			{children}
		</context.Provider>
	)
}

// Экспортируем и "обертку", и сам "пульт" (контекст)
export { ThemeProvider, context }
