import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

const Login = () => {
  // Register
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordConfirmRef = useRef();

  // State
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Card className='w-100 m-auto' style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Login</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                autoComplete='username'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                autoComplete='new-password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card className='w-100 m-auto' style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Register</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' ref={nameRef} required />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                autoComplete='username'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                autoComplete='username'
                ref={usernameRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                autoComplete='new-password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                autoComplete='new-password'
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
