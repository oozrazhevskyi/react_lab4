import React, { Component } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import teams from '../teams.data';
import {
    Card,
    Button
} from 'react-bootstrap';

export default function Team(){
    const {id} = useParams('id');
    const team = teams.filter(item=>item.id == id)[0];
    if (!team){
        return <Navigate to="/404" />
    }
    return (
      <Card className="m-4" bg="light" border="none">
        <Card.Img
            variant="top"
            style={{maxHeight: "50vh"}}
            src={team.image}
        />
        <Card.Body>
            <Card.Title>{team.title}</Card.Title>
            <hr/>
            <Card.Text>{team.fullDescription}</Card.Text>
        </Card.Body>
        </Card>
    )
}
