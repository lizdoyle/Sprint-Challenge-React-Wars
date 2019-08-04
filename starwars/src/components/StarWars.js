import React from "react";

import {Card, Feed} from "semantic-ui-react";
import './StarWars.scss';


const StarWars = (props) => (

            <Card className="swChar">
                <Card.Header className="swHeader"> {props.name}</Card.Header>
                    <Feed className="swFeed">
                        <Feed.Content>Height: {props.height} </Feed.Content>
                        <Feed.Content> Mass: {props.mass}</Feed.Content>
                        <Feed.Content> Hair Color: {props.hair_color}</Feed.Content>
                        <Feed.Content> Skin Color: {props.skin_color}</Feed.Content>
                        <Feed.Content> Eye Color: {props.eye_color}</Feed.Content>
                        <Feed.Content> gender: {props.gender}</Feed.Content>
                        <Feed.Content>Birth Year: {props.birth_year} </Feed.Content>
                        <Feed.Content>Species: {props.species} </Feed.Content>
                        <Feed.Content>Homeworld: {props.homeworld} </Feed.Content>
                        <Feed.Content>Films: {props.films} </Feed.Content>
                        <Feed.Content>Vehicles: {props.vehicles}</Feed.Content>
                        <Feed.Content>Starships: {props.starships}</Feed.Content>
                        <Feed.Content>Created: {props.created}</Feed.Content>
                        <Feed.Content>Edited: {props.edited}</Feed.Content>
                        <Feed.Content>URL: {props.url}</Feed.Content>

                    
                    </Feed>
                </Card>
       
)

export default StarWars