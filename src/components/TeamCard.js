import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class TeamCard extends Component {
  render() {
    let image = this.props.image
    let title = this.props.title
    let description = this.props.description
    let id = this.props.id
    return (
        <Card className="m-4 text-center" bg="light" border="primary">
        <Card.Img
            variant="top"
            src={image}
        />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" href={`/team/${id}`}>Про команду</Button>
        </Card.Body>
        </Card>
    )
  }
}