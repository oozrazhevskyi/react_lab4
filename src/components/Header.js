import React, { Component } from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import Blog from '../pages/Blog';

import logo from "../static/logo192.png";

export default class Header extends Component {
    render() {
        return (
            <Router>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                       <img
                       src={logo}
                       height="30"
                       width="30"
                       className="d-inline-block align-top"
                       alt = "Logo"
                       /> React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type ="text"
                                placeholder="Search"
                                className="me-sm-3"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>
                <Container className="min-vw-100">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                    </Routes>
                </Container>
            </main>
            </Router>
        )
    }
}
