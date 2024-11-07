import { Link, } from 'react-router-dom';
import HeroCard from './heroCard';
// import SearchBar from './searchBar';

export default function AllVillains ({ heroList }) {


    const allVillainData = heroList.filter(hero => hero.biography.alignment === 'bad');


    
    return(<>
        <div>
            <h1 className='villains'>Villains</h1>
            <Link to='/'><button className='nav-button'>Home</button></Link>
            <Link to='/allHeroes'><button className='nav-button'>Heroes</button></Link>
            <Link to='/allNeutral'><button className='nav-button'>Neutral</button></Link>
        </div>
        {/* <div className='search-bar'>
            <SearchBar  />
        </div> */}
        <div className='heroList'>
            {allVillainData.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
        </>
    )


}