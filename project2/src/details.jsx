import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react'
import DetailsContext from './detailsContext';



export default function HeroDetails ({ heroInfo }) {
    const { details } = useContext(DetailsContext)
    const { id } = useParams();

if (!details) {
    return <h2>Loading details...</h2>
}

const { powerstats, biography, appearance, connections, name, image } = details;

    return (
    <>
        <div className={`hero-details ${id}`}>
            <div className='name-img'>
                <h1 id={name}>{name}</h1>
                <img src={image} alt={name}/>
            </div>
            <div>
                <ul>
                    {/* {details.filter} */}
                </ul>
            </div>
            <div>

            </div>

        </div>

        

        
    </>
    // <h1>Info</h1>
    )


}