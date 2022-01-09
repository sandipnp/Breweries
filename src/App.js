import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import './App.css';
import { Search } from './Search';
import { Card } from './Card';

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries')
      .then(res => res.data)
      .then(data => {
        if (searchText == "") return data;
        return _.filter(data, { "city": searchText })
      })
      .then(data => setBreweries(data))
  }, [searchText])

  const handleSearch = (searchText) => {
    setSearchText(searchText)
  }

  return (
    <div className="App">
      <h2>Breweries</h2>
      <Search handleSearch={handleSearch} />
      {breweries.map(brewery => <Card brewery={brewery} key={brewery.id} />)}
    </div>
  );

}

export default App;

