import React, {useState} from "react";

import './StarWars.scss';

import Card from "./Card"


const StarWars = (props) => {

    Array.from(props.character).map(
        let name = {props.character.name}
        let height = {props.character.height}
        let mass = {props.character.mass} 
        let color = {props.character.hair_color}
        let skin = {props.character.skin_color}
        let eyes = {props.character.eye_color} 
        let gender = {props.character.gender} 
        let bday = {props.character.birth_year} 
        let species = {props.character.species} 
        let homeworld = {props.character.homeworld} 
        let films = {props.character.films}
        let vehicles = {props.character.vehicles}
        let starships = {props.character.starships}
        let created =  {props.character.created}
        let edited = {props.character.edited}
        let url = {props.character.url} 

    )
     

      
      return (
        <Card 
            name={name}
            height={height}
            mass={mass}
            color={color}
            skin={skin}
            eyes={eyes}
            gender={gender}
            bday={bday}
            species={species}
            homeworld={homeworld}
            films={films}
            vehicles={vehicles}
            starships={starships}
            created={created}
            edited={edited}
            url={url}
            
            />
       
      )}

export default StarWars