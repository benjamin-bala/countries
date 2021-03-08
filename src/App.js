import React, {useEffect, useState} from 'react'
import Details from './Pages/Details'
import Homepage from './Pages/Homepage'
import theme from './theme'
import {
  BrowserRouter as 
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios'

function App() {
  const [state,setState] = useState({
    theme: "light",
    data: [],
    searchField: 'Europe',
    route: "home",
    loading: true
  })


  useEffect(()=> {
    getCoutries()
  }, [])

  const changeTheme = (e) => {
    if(state.theme === "light"){
      setState({...state, theme: "dark"})
      document.getElementsByTagName("body")[0].style.background = theme.darkBackground
    }
    else if(state.theme === "dark"){
      setState({...state, theme: "light"})
      document.getElementsByTagName("body")[0].style.background = theme.lightBackground
    }
  }
  const getCoutries = async () => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all')
    setState({...state, data: res.data, loading: false})
  }

  const searchCountry = (e) => {
      setState({...state, searchField: e.target.value})
  }
  const filteredCountries = state.data.filter(country=>{
    return country.name.toLowerCase().includes(state.searchField.toLowerCase()) || country.region.toLowerCase().includes(state.searchField.toLowerCase())
  })

  return (
    <Switch>
      <Route exact path="/">
        <Homepage 
          searchResult={state.searchResult} 
          search={searchCountry} 
          theme={state.theme} 
          changeTheme={changeTheme} 
          data={filteredCountries}
          loading={state.loading}
        />
      </Route>
      <Route path="/details">
        <Details 
          theme={state.theme} 
          changeTheme={changeTheme} 
          country={state.data}/>
      </Route>
    </Switch>
  );
}

export default App;
