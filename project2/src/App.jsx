import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import HeroDetails from './details';
import DetailsContext from './detailsContext';
import './App.css'
import AllHeroes from './allHeroes';
import AllVillains from './allVillains';
import AllNeutrals from './allNeutral';

function App() {
  const [heroList, setHeroList] = useState([]);
  // const [filteredHeros, setFilteredHeroes] = useState([]);
  const [details, setDetails] = useState({});
  const value = { details, setDetails };

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => res.json())
      .then(data => setHeroList(data));

  }, []);


  // const heroData = heroList.filter(hero => hero.biography.alignment === 'neutral');
  // console.log(heroData);

  if (heroList.length === 0) {
    return (<h2>Loading Page...</h2>)
  } else {

    return (

      <DetailsContext.Provider value={value}>
        <div className='container'>
          <Routes>
            <Route path='/allHeroes' element={<AllHeroes heroList={heroList} />} />
            <Route path='/' element={<Home heroList={heroList} />} />
            <Route path='/details/:id' element={<HeroDetails />} />
            <Route path='/allVillains' element={<AllVillains heroList={heroList} />} />
            <Route path='/allNeutral' element={<AllNeutrals heroList={heroList} />} />
          </Routes>
        </div>
      </DetailsContext.Provider>


    )
  }
}



export default App
