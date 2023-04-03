import React, { Component } from 'react'
import {Col, Row, Card, ListGroup, Container} from "react-bootstrap";
import BlogPost from '../components/BlogPost'

export default class Blog extends Component {

  constructor(){
    super()
    this.posts = [
      {
        'id': '1',
        'image': 'https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg',
        'title': 'Blog post 1',
        'description': 'Lorem 1',
      },
      {
        'id': '2',
        'image': 'https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg',
        'title': 'Blog post 2',
        'description': 'Lorem 2',
      },
      {
        'id': '3',
        'image': 'https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg',
        'title': 'Blog post 3',
        'description': 'Lorem 3',
      },
      {
        'id': '4',
        'image': 'https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg',
        'title': 'Blog post 4',
        'description': 'Lorem 4',
      },
      {
        'id': '5',
        'image': 'https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg',
        'title': 'Blog post 5',
        'description': 'Lorem 5',
      },
    ]
  }

  render() {
    return (
      <Container className="w-100">
        <Row>
          <Col md="9">
            {this.posts.map((post) => {
              return <BlogPost post={post} />;
            })}
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Категорії</h5>

            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>категорія 1</ListGroup.Item>
                <ListGroup.Item>категорія 2</ListGroup.Item>
                <ListGroup.Item>категорія 3</ListGroup.Item>
                <ListGroup.Item>категорія 4</ListGroup.Item>
                <ListGroup.Item>категорія 5</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3 bg-light">
              <Card.Body>
                <Card.Title>Slide widget</Card.Title>
                <Card.Text>Lorem</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
