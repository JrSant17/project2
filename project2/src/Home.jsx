import React from 'react';
import HeroCard from './heroCard';
import SearchBar from './searchBar';

export default function Home({ heroList, setFilteredHeroes }) {

    return(<>
        <div>
            <h1>HOMEPAGE</h1>
        </div>
        <div className='search-bar'>
            <SearchBar heroList={heroList} setFilteredHeroes={setFilteredHeroes}/>
        </div>
        <div className='heroList'>
            {heroList.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
        </>
    )

}

