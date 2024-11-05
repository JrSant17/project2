import React, { useState, useEffect } from 'react';

export default function SearchBar () {
    const [searchInput, setSearchInput] = useState('');

    
    return (
        <div>
            <input className='searchBar' type='text' placeholder='Search your favorite super hero...' />
            <button>Hero Search</button>
        </div>
    )
}