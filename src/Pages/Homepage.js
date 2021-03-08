import '../App.css';
import Header from '../Components/Header/Header';
import Card from '../Components/Card/Card';
import SearchBox from '../Components/Searchbox/SearchBox';
import Filter from '../Components/Filter/Filter';


function Homepage({changeTheme,theme,data,search,loading}) {

  return (
    <div className="App">
      <Header changeTheme={changeTheme} theme={theme} />
      <div className="main__content">
      
        <div className="search__container">
          <SearchBox theme={theme} search={search}/>
          <Filter theme={theme} region={search}/>
        </div>

        
        <div className="card__container">
         
        {
          data.map(country => {
            return <Card  theme={theme} country={country} key={country.name}/>
          })
        }
        </div>
      </div>
    </div>
  );
}

export default Homepage;
