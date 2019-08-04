import React from "react";

import {Card, Feed} from "semantic-ui-react";
import './StarWars.scss';


const StarWars = (props) => (

            <Card className="swChar">
                <Card.Header className="swHeader"> {props.name}</Card.Header>
                    <Feed className="swFeed">
                        <Feed.Content> Height: {props.height} </Feed.Content>
                        <Feed.Content> Mass: {props.mass}</Feed.Content>
                        <Feed.Content> Hair Color: {props.color}</Feed.Content>
                        <Feed.Content> Skin Color: {props.skin}</Feed.Content>
                        <Feed.Content> Eye Color: {props.eyes}</Feed.Content>
                        <Feed.Content> Gender: {props.gender}</Feed.Content>
                        <Feed.Date> Birth Year: {props.bday} </Feed.Date>
                        <Feed.Content> Species: {props.species} </Feed.Content>
                        <Feed.Content> Homeworld: {props.homeworld} </Feed.Content>
                        <Feed.Content> Films: {props.films} </Feed.Content>
                        <Feed.Content> Vehicles: {props.vehicles}</Feed.Content>
                        <Feed.Content> Starships: {props.starships}</Feed.Content>

                    
                    </Feed>
                    <Card.Meta><span className="meta">Created: {props.created} </span></Card.Meta> 
                    <Card.Meta><span className="meta">Edited: {props.edited} </span></Card.Meta> 
                    <Card.Meta><span className="meta">URL: {props.url} </span></Card.Meta> 
                </Card>
       
)

export default StarWars