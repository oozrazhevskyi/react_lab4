import React, { Component } from 'react'
import {Col, Nav, Row, Tab, Container} from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Program</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Library</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <img className="d-block w-75" src="https://i.pinimg.com/originals/aa/f0/69/aaf069dc6de7618a63de784b70ad4370.jpg" alt="picture one"/>
                                <p>
                                First image description. Lorem ipsum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img className="d-block w-75" src="https://jstemplate.net/_next/image?url=%2Fproducts%2Fmetajobs-cover.png&w=1920&q=75" alt="picture two"/>
                                <p>
                                Second image description. Lorem ipsum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img className="d-block w-75" src="https://s3-alpha.figma.com/hub/file/858291939/14dda654-9bf1-47a5-ba66-904aa3003c6e-cover.png" alt="picture three"/>
                                <p>
                                Third image description. Lorem ipsum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img className="d-block w-75" src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg" alt="picture fourth"/>
                                <p>
                                Fourth image description. Lorem ipsum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img className="d-block w-75" src="https://programminglibrarian.org/sites/default/files/partnerships_2.jpg" alt="picture fifth"/>
                                <p>
                                Fifth image description. Lorem ipsum.
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
  }
}
