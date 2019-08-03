import React, {useState} from "react";

import './StarWars.scss';


const StarWars = (props) => {

    const [setCharacter] = useState('');
     
    const showAboutChar = char => {
       return <div>
            <h2> {props.name} </h2>
            <p> {props.height} </p>
            <p> {props.mass} </p>
            <p> {props.hair_color} </p>
            <p> {props.skin_color} </p>
            <p> {props.eye_color} </p>
            <p> {props.gender} </p>
            <p> {props.birth_year} </p>
            <p> {props.species} </p> 
            <p> {props.homeworld} </p> 
            <div>{props.films} </div>
            <div> {props.vehicles}</div>
            <div> {props.starships}</div>
            <p> {props.created}</p>
            <p> {props.edited}</p>
            <div> {props.url} </div>
        </div> 

    }
    
      
      return (
        <div>
            <div className="AboutChar"> 
               {setCharacter.map(showAboutChar)}
            </div>


        </div>
       
      )}

export default StarWars