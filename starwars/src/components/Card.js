import React from "react";

import StarWars from "./StarWars"

const Card = (props) => {

    return (
        <div className="swcard"> 
            { Array.from(props.character).map( (i, cb) => { 
                let name = i['name'];
                let height= i['height'];
                let mass = i['mass'];
                let color = i['hair_color'];
                let skin = i['skin_color'];
                let eyes = i['eye_color'];
                let gender = i['gender'];
                let bday = i['birth_year'];
                let species = i['species'];
                let homeworld = i['homeworld'];
                let films = i['films'];
                let vehicles = i['vehicles'];
                let starships = i['starships'];
                let created =  i['created'];
                let edited = i['edited'];
                let url = i['url'];
             console.log(url);

             return <StarWars key={name} 
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
                            
             />;})}
        </div>

    )

}

export default Card