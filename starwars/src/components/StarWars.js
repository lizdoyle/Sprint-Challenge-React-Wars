import React from "react";

import {Card, Feed} from "semantic-ui-react";
import './StarWars.scss';


const StarWars = (props) => {

            <Card className="swChar">
                <Card.Header className="swHeader">{props.name}</Card.Header>
               
                height={props.height}
                mass={props.mass}
                color={props.hair_color}
                skin={props.skin_color}
                eyes={props.eye_color}
                gender={props.gender}
                bday={props.birth_year}
                species={props.species}
                homeworld={props.homeworld}
                films={props.films}
                vehicles={props.vehicles}
                starships={props.starships}
                created={props.created}
                edited={props.edited}
                url={props.url}
                
                
                </Card>
       
      }

export default StarWars