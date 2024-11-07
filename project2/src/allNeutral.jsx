import { Link } from 'react-router-dom';
import HeroCard from './heroCard';
// import SearchBar from './searchBar';

export default function AllNeutrals ({ heroList }) {
    
    const allNeutralData = heroList.filter(hero => hero.biography.alignment === 'neutral');


    
    return(<>
        <div>
            <h1 className='neutrals'>Neutrals</h1>
            <Link to='/'><button className='nav-button'>Home</button></Link>
            <Link to='/allHeroes'><button className='nav-button'>Heroes</button></Link>
            <Link to='/allVillains'><button className='nav-button'>Villians</button></Link>
        </div>
        {/* <div className='search-bar'>
            <SearchBar  />
        </div> */}
        <div className='heroList'>
            {allNeutralData.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
        </>
    )


}