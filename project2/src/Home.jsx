import React from 'react';
import HeroCard from './heroCard';

export default function Home({ heroList }) {

    return(
        <div className='heroList'>
            {heroList.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
    )

}

