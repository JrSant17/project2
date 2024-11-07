import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react'
import DetailsContext from './detailsContext';




export default function HeroDetails() {
    const { details } = useContext(DetailsContext)
    const { id } = useParams();


    if (!details) {
        return <h2>Loading details...</h2>
    }

    return (

        <div className={`hero-details ${id}`}>
            <h1 className='heroes' id={details.name}>{details.name}</h1>
            <Link to='/'><button className='nav-button'>Home</button></Link>
            <Link to='/allHeroes'><button className='nav-button'>Heroes</button></Link>
            <Link to='/allVillains'><button className='nav-button'>Villians</button></Link>
            <Link to='/allNeutral'><button className='nav-button'>Neutral</button></Link>

            <div >
                <div className='wrapper1'>
                    <div className='name-img'>
                        <img src={details.images.md} alt={details.name} />
                    </div>

                    <ul className='biography'>
                        <h3 className='biography-title'>{details.name} Biography:</h3>
                        {Object.entries(details.biography).map(([info, value]) => (
                            <li key={info}>{`${info.toUpperCase()}: ${value}`}</li>
                        ))}
                    </ul>
                </div>
                <div className='wrapper2'>
                    <ul className='appearance'>
                        <h3 className='appearance-title'>{details.name} Appearance:</h3>
                        {Object.entries(details.appearance).map(([appearance, value]) => (
                            <li key={appearance}>{`${appearance.toUpperCase()}: ${value}`}</li>
                        ))}
                    </ul>
                    <ul className='powerstats'>
                        <h3 className='powerstats-title'>{details.name} Power Stats:</h3>
                        {Object.entries(details.powerstats).map(([stat, value]) => (
                            <li key={stat}>{`${stat.toUpperCase()}: ${value}`}</li>
                        ))}
                    </ul>
                </div>
                <div className='wrapper3'>
                    <ul className='connections'>
                        <h3 className='connections-title'>{details.name} Connections:</h3>
                        {Object.entries(details.connections).map(([connection, value]) => (
                            <li key={connection}>{`${connection.toUpperCase()}: ${value}`}</li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>






    )


}