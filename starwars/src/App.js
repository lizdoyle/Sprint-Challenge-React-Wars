import React, {useState, useEffect} from 'react';
import './App.scss';

import StarWars from "./components/StarWars";

import axios from "axios";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState('');

  console.log(character);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect( () => {

        axios
          .get ('https://swapi.co/api/people/')
              .then( res => {
                  setCharacter(res.data.results)
                  console.log(res.data.results)
    
              }
    
              ) 
              .catch(err => { console.log(err)})
    
    
      } , [])
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="StarWars">
            { character ?
            <StarWars 
              name={character.name} 
              height={character.height} 
              mass={character.mass} 
              hair={character.hair_color}
              skin={character.skin_color}
              eyes={character.eye_color}
              bday={character.birth_year}
              gender={character.gender}
              species={character.species}
              homeworld={character.homeworld}
              films={character.films}
              vehicles={character.vehicles}
              starships={character.starships}
              created={character.created}
              edited={character.edited}
              url={character.url} 
    
            />  : <div> Loading StarWars Characters</div> }
          </div>
    </div>
  );

}

export default App
