import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import Home from '../src/Home';
import DetailsContext from '../src/detailsContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AllVillains from '../src/allVillains';
import AllHeroes from '../src/allHeroes';
import AllNeutrals from '../src/allNeutral';
import HeroDetails from '../src/details';
import HeroCard from '../src/heroCard';



describe('App', () => {
  it('renders the App component', () => {
    render( 
    <Router>
      <App />
    </Router>
  )
    
    // screen.debug(); // prints out the jsx in the App component unto the command line
  })
});

describe('Homepage', () => {
  it('as a user, I want to see a list of superheros on the homepage', () => {
    const mockHeroList = [
      { id: 1, name: 'A-Bomb', images: { sm: 'A-Bomb' } },
      { id: 2, name: 'Abe Sapien', images: { sm: 'Abe-Sapien.jpg' } }
    ];

    render(
   
      <Router>
        <Home heroList={mockHeroList} />
      </Router>
    
  );
    
      // screen.debug(); // prints out the jsx in the App component unto the command line
  })
});

describe('Villain page', () => {
  it('as a user, I want to see a list of villains only when on the villain page', () => {
    const mockVillainList = [
      { id: 146, name: 'Callisto', images: { sm: 'callisto.jpg' }, biography: { alignment: 'bad' }},
      { id: 181, name: 'Clock King', images: { sm: 'clock-king.jpg' }, biography: { alignment: 'bad' } }
    ];


    render(

      <Router>
        <AllVillains heroList={mockVillainList} />
      </Router>
    );

    // screen.debug();

    });
  });

  describe('AllHero page', () => {
    it('as a user, I want to see a list of Heroes only when on the Heroes page', () => {
      const mockHeroList = [
        { id: 13, name: 'Ajax', images: { sm: 'ajax.jpg' }, biography: { alignment: 'good' }},
        { id: 36, name: 'Aquababy', images: { sm: 'aquababy.jpg' }, biography: { alignment: 'good' } }
      ];
  
      render(

        <Router>
          <AllHeroes heroList={mockHeroList} />
        </Router>
      );
  
      // screen.debug();
  
      });
    });

    describe('AllNeutral page', () => {
      it('as a user, I want to see a list of Neutrals only when on the Neutral page', () => {
        const mockNeutralList = [
          { id: 100, name: 'Black Flash', images: { sm: 'blackflash.jpg' }, biography: { alignment: 'neutral' }},
          { id: 374, name: 'Juggernaut', images: { sm: 'juggernaut.jpg' }, biography: { alignment: 'neutral' } }
        ];
    
        render(
  
          <Router>
            <AllNeutrals heroList={mockNeutralList} />
          </Router>
        );
    
        // screen.debug();
    
        });
      });

      describe('details page', () => {
        it('as a user I can see hero details when I click on their picutre', () => {
          const mockDetails = { 
              id: 100, 
              name: 'A-Bomb', 
              images: { md: 'a-bomb.jpg' }, 
              powerstats: { intelligence: 38 },
              connections: { groupAffiliation: "Hulk Family" },
              appearance: { gender: "male" },
              biography: { fullName: "Richard Milhouse Jones" }
          };

        render(
          <DetailsContext.Provider value={{ details: mockDetails }}>
            <Router>
              <HeroDetails />
            </Router>
          </DetailsContext.Provider>
        );

        // screen.debug();

        })
      })

      describe('heroCard', () => {
        it('as a user I can see the hero info rendered from heroCard', () => {
          const mockDetails = { 
              id: 100, 
              name: 'A-Bomb', 
              images: { sm: 'a-bomb.jpg' }, 
            };

        render(
            <Router>
              <HeroCard heroInfo={mockDetails}/>
            </Router>

        );

        screen.debug();

        })
      })