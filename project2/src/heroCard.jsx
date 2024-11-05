import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DetailsContext from './detailsContext';


export default function HeroCard ({ heroInfo }) {
    const { setDetails } = useContext(DetailsContext)
    
    return(
        
        <div className='hero-card'>
            <Link key={heroInfo.id} to={`/details/${heroInfo.id}`}>
                <img className='oneHero' src={heroInfo.images.sm} alt={heroInfo.name} 
                    onClick={() => setDetails(heroInfo)}>
                    </img>
                    
            </Link>

            <h2 className='hero-name'>{heroInfo.name}</h2>
        </div>
    )
}

