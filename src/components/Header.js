import React, { useState } from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button,
    Modal
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

export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Вхід</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Електронна пошта</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                        />
                    </Form.Group>

                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Запам'ятати мене" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Увійти
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

        <Router>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                <img
                    src={logo}
                    height="30"
                    width="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />{" "}
                React Site
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-between"
                >
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About us</Nav.Link>
                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="text" placeholder="Search" className="me-sm-3" />
                    <Button variant="outline-info">Search</Button>
                    <Button className="ms-2" onClick={handleShow}>
                    Login
                    </Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <main>
            <Container className="min-vw-100">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blog" element={<Blog />} />
                </Routes>
            </Container>
            </main>
        </Router>
        </>
    )
}