import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const url = 'https://restcountries.eu/rest/v2/all';

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ filteredCountries, setFilteredCountries ] = useState([]);

  const styles = {
    width: '100px',
    height: '100px',
  }

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCountries(response.data) 
      })
  }, [])

  useEffect(() => {
    setFilteredCountries(countries.filter(country => country.name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())))
  }, [countries, searchTerm])


      if(filteredCountries.length > 10){
        return (
          <div className="App">
            Search country/ies <input value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)}/>
            <p>Too many matches, be more specific</p>
          </div>
          )
      }else if(filteredCountries.length === 1){
        const country = filteredCountries[0];
        return (
          <div className="App">
            Search country/ies <input value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)}/>
            <div>
              <h3>{country.name}</h3>
              <p>Capital {country.capital}</p>
              <p>Population {country.population}</p>
              <div>
                <h4>Languages</h4>
                <ul>
                  {
                    country.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)
                  }
                </ul>
              </div>
              <div>
                <img src={country.flag} alt={ country.name} style={styles} />
              </div>
            </div>
          </div>
        )
      }else {
        return (
          <div className='App'>
            Search country/ies <input value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)}/>
            <ul>
              {
                filteredCountries.map(country => <li key={country.name}>{ country.name }</li>) 
              } 
            </ul>
          </div>
          )
      }
}

export default App;
