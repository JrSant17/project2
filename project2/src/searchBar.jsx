import React, { useState, useEffect } from 'react';


export default function SearchBar ({ heroList, setFilteredHeroes }) {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    };

    const filteredData = heroList.filter((hero) => 
        hero.name.toLowerCase().includes(term.toLowerCase())
);
    
    setFilteredHeroes(filteredData)

    return (
        <div>
            <input 
            className='searchBar' 
            type='text' 
            placeholder='Search your favorite super hero...' 
            value={searchTerm} 
            onChange={handleSearchChange}
            />
        </div>
    )
}