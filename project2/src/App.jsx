import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Details from './details';
import DetailsContext from './detailsContext';
import './App.css'

function App() {
  const [heroList, setHeroList] = useState([]);
  const [filteredHeros, setFilteredHeroes] = useState([]);
  const [details, setDetails] = useState({});
  const value = { details, setDetails };

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => res.json()) 
      .then(data => setHeroList(data));
      
  }, []);

  if(heroList.length == 0) {
    return (<h2>Loading Page...</h2>)
  } else {

return (
  
    <DetailsContext.Provider value={value}>
      <div className='container'>
         <Routes>
          <Route path='/' element={<Home heroList={heroList} />}/>
          <Route path='/details/:id' element={<Details />}/>
        </Routes>
      </div>
    </DetailsContext.Provider>
  

  )
}
}

export default App
