import React from 'react'
// Импортируем "адрес" нашего хранилища
import { context } from '../themaController/ThemeProvider' 

import sun from '../../assets/img/icons/sun.svg'
import moon from '../../assets/img/icons/moon.svg'

const DarkModeBtn = () => {

    const { isDark, toggleTheme } = React.useContext(context);

    return ( 

        <button 
            className={isDark ? "dark-mode-btn dark-mode-btn--active" : "dark-mode-btn"} 
            onClick={toggleTheme} 
        > 
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon "/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon "/>
        </button>
     )
}

export default DarkModeBtn;