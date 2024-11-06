import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react'
import DetailsContext from './detailsContext';




export default function HeroDetails () {
    const { details } = useContext(DetailsContext)
    const { id } = useParams();


if (!details) {
    return <h2>Loading details...</h2>
}

    return (
   
        <div className={`hero-details ${id}`}>
            <Link to='/'><button>Home</button></Link>
            <Link to='/allHeroes'><button>Heroes</button></Link>
            <Link to='/allVillains'><button>Villians</button></Link>
            <Link to='/allNeutral'><button>Neutral</button></Link>
            <div className='name-img'>
                <h1 id={details.name}>{details.name}</h1>
                <img src={details.images.md} alt={details.name}/>
            </div>
            <div>
                <h3 className='powerstats'>{details.name} Power Stats:</h3>
                <ul>
                {Object.entries(details.powerstats).map(([stat, value]) => (
                        <li key={stat}>{`${stat}: ${value}`}</li>
                    ))}
                </ul>
                <h3 className='connections'>{details.name} Connections:</h3>
                <ul>
                {Object.entries(details.connections).map(([connection, value]) => (
                    <li key={connection}>{`${connection}: ${value}`}</li>
                ))}
                </ul>
                <h3 className='appearance'>{details.name} Appearance:</h3>
                <ul>
                {Object.entries(details.appearance).map(([appearance, value]) => (
                    <li key={appearance}>{`${appearance}: ${value}`}</li>
                ))}
                </ul>
                <h3 className='biography'>{details.name} Biography:</h3>
                <ul>
                {Object.entries(details.biography).map(([info, value]) => (
                    <li key={info}>{`${info}: ${value}`}</li>
                ))}
                </ul>
            </div>
        </div>

        

        
    
    
    )


}