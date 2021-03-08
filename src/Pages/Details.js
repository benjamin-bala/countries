import React from 'react'
import Header from '../Components/Header/Header'
import '../App.css'
import themeProperties from '../theme'
import Pills from '../Components/Pills/Pills'
import {BsArrowLeft} from 'react-icons/bs'
import { useHistory,useLocation } from "react-router-dom";


export default function Details({theme,changeTheme,country}){
    let history = useHistory();
    let {search} = useLocation()

    let countryName = search.slice(6,search.length);

    let countryDetails = country.filter(data=>{
       return data.name.toLowerCase().includes(countryName.toLowerCase())
    })
    countryDetails = countryDetails[0]
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(
        <div className="details">
            <Header theme={theme} changeTheme={changeTheme}/>

            <div className="main__content">
      
            <div className="search__container">
                <div className="btn" 
                style={{
                    color: theme === "light" ? themeProperties.lightText : themeProperties.darkText,
                    background: theme === "light" ? themeProperties.lightBackground : themeProperties.darkElement
                }}
                onClick={()=> history.push("/")}
                >
                    <BsArrowLeft size={20} fill={theme === "light" ? themeProperties.lightText : themeProperties.darkText}/>
                    <span>Back</span>
                </div>
            </div>

            <div className="details__container">
                <div className="image__box">
                    <img src={countryDetails.flag} alt="" />
                </div>
                <div className="writeup" style={{color: theme === "light" ? themeProperties.lightText : themeProperties.darkText}}>
                    <h2 className="details__heading">{countryDetails.name}</h2>

                    <div className="details__paragraph">
                        <div>
                            <p><strong>Native Name:</strong> {countryDetails.nativeName}</p>
                            <p><strong>Population:</strong> {addComma(countryDetails.population)}</p>
                            <p><strong>Region:</strong> {countryDetails.region}</p>
                            <p><strong>Sub Region:</strong> {countryDetails.subregion}</p>
                            <p><strong>Capital:</strong> {countryDetails.capital}</p>
                        </div>
                        <div>
                            <p><strong>Top Level Domain:</strong>{countryDetails.topLevelDomain.map(i => <span key={i.name}>{i}</span>)} </p>
                            <p><strong>Currency:</strong> {countryDetails.currencies.map(i => <span key={i.name}>{i.name}</span>)} </p>
                            <p><strong>Languages:</strong> {countryDetails.languages.map(i => <span key={i.name}>{i.name }</span>)} </p>
                        </div>
                    </div>

                    <div className="details__pills">
                        <p><strong>Border Countries:</strong></p>
                        <div>
                            {countryDetails.borders.map(i =>  <Pills name={i} key={i} theme={theme} />)}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}