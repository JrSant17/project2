import React, { useState, useEffect } from 'react';


export default function SearchBar({ setSearchTerm }) {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                className='searchBar'
                type='text'
                placeholder='Search your favorite super hero...'
                onChange={handleSearchChange}
            />
        </div>
    );
}