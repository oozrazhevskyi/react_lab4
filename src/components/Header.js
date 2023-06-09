import React, { useState, useEffect } from "react";
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
import Team from "../pages/Team";

import logo from "../static/logo192.png";
import BlogArticle from "../pages/BlogArticle";
import NotFound from "../pages/NotFound";
export default function Header() {
    // Modal visibility state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Form validation states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');
    
    const [formValid, setFormValid] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (!e.target.value) {
                setPasswordError('Пароль не може бути порожнім');
        } else if (e.target.value.length < 3) {
            setPasswordError('Пароль повинен мати не менше 3 символів');
        } else if (e.target.value.length > 8) {
            setPasswordError('Пароль повинен мати не більше 8 символів');
        } else {
            setPasswordError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    };

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, passwordError]);


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
                        {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                        <Form.Control
                            onChange={e => emailHandler(e)}
                            name="email"
                            value={email}
                            onBlur={e => blurHandler(e)}
                            type="email"
                            placeholder="Enter email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        {(passwordError && passwordDirty) && <div style={{color:"red"}}>{passwordError}</div>}
                        <Form.Control
                            onChange={e => passwordHandler(e)}
                            name="password"
                            value={password}
                            onBlur={e => blurHandler(e)}
                            type="password"
                            placeholder="Enter password"
                        />
                    </Form.Group>

                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Запам'ятати мене" />
                    </Form.Group>

                    <Button disabled={!formValid} variant="primary" type="submit">
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
                <Route path="/blog/category/:category" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogArticle />} />
                <Route path="/team/:id" element={<Team />} />
                <Route path='*' element={<NotFound />}/>
                </Routes>
            </Container>
            </main>
        </Router>
        </>
    )
}