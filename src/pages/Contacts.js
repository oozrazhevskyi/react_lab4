import React, { useState, useEffect } from 'react'
import { 
  Container,
  Form,
  Button
} from 'react-bootstrap'

export default function Contacts() {

    // Form validation states
    const [email, setEmail] = useState('');
    const [subject, setsubject] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [subjectDirty, setSubjectDirty] = useState(false);
    
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [subjectError, setSubjectError] = useState('Повідомлення не може бути порожнім');
    
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

    const subjectHandler = (e) => {
        setsubject(e.target.value);
        if (!e.target.value) {
            setSubjectError('Повідомлення не може бути порожнім');
        } else if (e.target.value.length < 10) {
            setSubjectError('Повідомлення повинне мати не менше 10 символів');
        } else if (e.target.value.length > 500) {
            setSubjectError('Повідомлення повинен мати не більше 500 символів');
        } else {
            setSubjectError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'subject':
                setSubjectDirty(true)
                break
        }
    };

    useEffect(() => {
        if (emailError || subjectError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, subjectError]);


    return (
      <Container>
        <h1>Contact us!</h1>

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

                    <Form.Group controlId="fromBasicSubject">
                        <Form.Label>Повідомлення</Form.Label>
                        {(subjectError && subjectDirty) && <div style={{color:"red"}}>{subjectError}</div>}
                        <Form.Control as="textarea"
                            onChange={e => subjectHandler(e)}
                            name="subject"
                            value={subject}
                            onBlur={e => blurHandler(e)}
                            type="text"
                            placeholder="Enter subject"
                        />
                    </Form.Group>

                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button disabled={!formValid} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
      </Container>
    )
  }