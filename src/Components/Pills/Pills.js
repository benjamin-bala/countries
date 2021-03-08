import React from 'react'
import './pills.css'
import themeProperties from '../../theme'

export default function Pills({name,theme}){
    return(
        <div className="pills" 
        style={{
            color: theme === "light" ? themeProperties.lightText : themeProperties.darkText,
            background: theme === "light" ? themeProperties.lightBackground : themeProperties.darkElement
        }}
        >
            <p>{name}</p>
        </div>
    )
}