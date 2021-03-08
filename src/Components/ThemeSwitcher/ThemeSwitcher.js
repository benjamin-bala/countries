import React from 'react'
import {HiOutlineMoon} from 'react-icons/hi'
import './themeswitcher.css'
import themeProperties from '../../theme'

export default function ThemeSwitcher({theme,changeTheme}){
    return(
        <div className="themeswitcher">
            <span>
                <HiOutlineMoon size={20} stroke={theme === "light" ? themeProperties.lightText : themeProperties.darkText} fill={theme === "light" ? "none" : themeProperties.darkText}/>
            </span>
            <p onClick={changeTheme} style={{color: theme === "dark" ? themeProperties.darkText : themeProperties.lightText}}>Dark Mode</p>
        </div>
    )
}