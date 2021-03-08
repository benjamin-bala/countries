import React from 'react'
import './filter.css'
import themeProperties from '../../theme'

export default function Filter({theme,region}){
    return(
        <div className="filter">
            <select 
            style={{background: theme === "light" ? themeProperties.lightBackground : themeProperties.darkElement,
            color: theme === "light" ? themeProperties.lightText : themeProperties.darkText}}
            onClick={region}
            >
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}