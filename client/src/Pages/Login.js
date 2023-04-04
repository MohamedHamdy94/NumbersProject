import React, {  useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    localStorage.setItem('userInfo', JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem('userInfo')));
    window.location.reload();
  };
  return (
    <Container className="" style={{ width: '600px' }}>
      <Card className="p-5 ">
        <Card.Title>
          <h1 className="my-3">Sign In</h1>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3">
              <Button className="bg-warning text-dark" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
