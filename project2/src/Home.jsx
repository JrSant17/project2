import React, { useState, useEffect } from 'react';
import HeroCard from './heroCard';
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';

export default function Home({ heroList }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredHeros, setFilteredHeroes] = useState(heroList)

    useEffect(() => {
        const filteredData = heroList.filter((hero) =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHeroes(filteredData);
    }, [searchTerm, heroList])
    
    return(<>
        <div>
            <h1>Super Hero Homepage</h1>
            <Link to='/allHeroes'><button>Heroes</button></Link>
            <Link to='/allVillains'><button>Villains</button></Link>
            <Link to='/allNeutral'><button>Neutral</button></Link>
        </div>
        <div className='search-bar'>
            <SearchBar setSearchTerm={setSearchTerm} />
        </div>
        <div className='heroList'>
            {filteredHeros.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
        </>
    )

}

