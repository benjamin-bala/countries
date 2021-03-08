import React from 'react'
import './card.css';
import themeProperties from '../../theme'
import {Link} from 'react-router-dom'

export default function Card({theme,country}){
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(
        <Link to={`/details?name=${country.name}`} className="card" style={{background: theme === "light" ? themeProperties.lightBackground : themeProperties.darkElement}}>
            <div className="card__header">
                <img src={country.flag} alt="" />
            </div>
            <div className="card__body" style={{color: theme === "light" ? themeProperties.lightText : themeProperties.darkText}}>
                <h2 className="heading">{country.name}</h2>
                <div className="summary">
                    <p><strong>Population:</strong> {addComma(country.population)}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                </div>
            </div>
        </Link>
    )
}