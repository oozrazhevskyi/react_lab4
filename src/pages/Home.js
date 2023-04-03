import React, { Component } from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TeamCard from '../components/TeamCard';
import CarouselBoxHk from '../components/CarouselBoxHk';
import teams from '../teams.data';



export default class Home extends Component {

  constructor () {
    super();
    this.teams = teams
  }

  render() {
    return (
      <Container>
        <center><CarouselBoxHk/></center>
      <hr/>
        <h2 className="text-center m-4">Наша команда</h2>
        <Row>
          {this.teams.map((team)=>{
            return (
              <Col>
                <TeamCard
                  id = {team.id}
                  image = {team.image}
                  title = {team.title}
                  description = {team.shortDescription}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}
