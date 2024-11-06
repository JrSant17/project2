import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react'
import DetailsContext from './detailsContext';
import HeroCard from './heroCard';
import SearchBar from './searchBar';

export default function AllNeutrals ({ heroList }) {
    
    const allNeutralData = heroList.filter(hero => hero.biography.alignment === 'neutral');


    
    return(<>
        <div>
            <h1>All Neutrals</h1>
            <Link to='/'><button>Home</button></Link>
            <Link to='/allHeroes'><button>Heroes</button></Link>
            <Link to='/allVillains'><button>Villians</button></Link>
        </div>
        {/* <div className='search-bar'>
            <SearchBar  />
        </div> */}
        <div className='heroList'>
            {allNeutralData.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
        </>
    )


}