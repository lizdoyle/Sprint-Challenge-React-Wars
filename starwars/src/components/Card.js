import React from "react";

const Card = (props) => {

    return (
        <div className="Card">
            { Array.from(props.character).map( i, cb) => {
                let name = i['name']
                let height = i['height']
                let mass = i['mass'] 
                let color = [hair_color]
                let skin = ['skin_color']
                let eyes = eye_color
                let gender = gender
                let bday = birth_year
                let species = species
                let homeworld = props.character.homeworld
                let films = props.character.films
                let vehicles = props.character.vehicles
                let starships = props.character.starships
                let created =  props.character.created
                let edited = props.character.edited
                let url = props.character.url}
             })

             return <Character 
        </div>

    )

    )

}

export default Card