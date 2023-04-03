import React, { Component } from 'react'
import {Col, Row, Card, ListGroup, Container} from "react-bootstrap";
import BlogPost from '../components/BlogPost'
import posts from '../blog.data';
import { useParams } from 'react-router-dom';


export default function Blog() {
  const {category} = useParams('category');
  console.log(`siudhishg ${category}`);
  let filteredPosts = posts;
  if(category){
    filteredPosts = [...posts.filter(item=>item.category === category)]
  }

  return (
    <Container className="w-100">
      <Row>
        <Col md="9">
          {filteredPosts.map((post) => {
            return <BlogPost key={post.id} post={post} />;
          })}
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Категорії</h5>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><a href='/blog/'>All</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/category/react'>React</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/category/web-development'>Web Development</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/category/tools'>Tools</a></ListGroup.Item>
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
