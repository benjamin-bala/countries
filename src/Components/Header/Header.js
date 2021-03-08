import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './header.css'
import themeProperties from '../../theme'

export default function Header({theme,changeTheme}){ 
    return(
        <div className="header" style={{background: theme === "light" ? themeProperties.lightBackground : themeProperties.darkBackground}}>
            <div className="header__text">
                <h2 style={{color: theme === "light" ? themeProperties.lightText : themeProperties.darkText}}>Where in the world?</h2>
            </div>
            <ThemeSwitcher theme={theme} changeTheme={changeTheme}/>
        </div>
    )
}