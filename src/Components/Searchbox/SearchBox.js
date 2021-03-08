import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './searchbox.css'
import themeProperties from '../../theme'

export default function SearchBox({theme,search}){
    return(
        <div className="searchbox" style={{background: theme === "light" ? themeProperties.lightBackground : themeProperties.darkElement}}>
            <span>
                <AiOutlineSearch size={20} fill={theme === "light" ? themeProperties.lightText : themeProperties.darkText} />
            </span>
            <input onChange={search} type="text" style={{color: theme === "light" ? themeProperties.lightText : themeProperties.darkText}} placeholder="Search for a country..." />
        </div>
    )
}