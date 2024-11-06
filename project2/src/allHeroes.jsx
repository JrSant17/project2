import { Link } from 'react-router-dom';
import HeroCard from './heroCard';
// import SearchBar from './searchBar';

export default function AllHeroes ({ heroList }) {

    const allHeroData = heroList.filter(hero => hero.biography.alignment === 'good');


    
    return(<>
        <div>
            <h1>All Heroes</h1>
            <Link to='/'><button>Home</button></Link>
            <Link to='/allVillains'><button>Villains</button></Link>
            <Link to='/allNeutral'><button>Neutral</button></Link>
        </div>
        {/* <div className='search-bar'>
            <SearchBar  />
        </div> */}
        <div className='heroList'>
            {allHeroData.map(hero => <HeroCard key={hero.id} heroInfo={hero} />)}
        </div>
        </>
    )


}