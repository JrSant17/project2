import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react'
import DetailsContext from './detailsContext';
import HeroCard from './heroCard';
import SearchBar from './searchBar';

export default function AllVillains ({ heroList }) {
    const { details } = useContext(DetailsContext)
    const [filteredHeros, setFilteredHeroes] = useState(heroList)

    const allVillainData = heroList.filter(hero => hero.biography.alignment === 'bad');


    
    return(<>
        <div>
            <h1>All Villains</h1>
            <Link to='/'><button>Home</button></Link>
            <Link to='/allHeroes'><button>Heroes</button></Link>
            <Link to='/allNeutral'><button>Neutral</button></Link>
        </div>
        {/* <div className='search-bar'>
            <SearchBar  />
        </div> */}
        <div className='heroList'>
            {allVillainData.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
        </>
    )


}