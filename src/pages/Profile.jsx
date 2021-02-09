import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

const Profile = () => {
  const titleRef = useRef();
  const authorRef = useRef();
  const descriptionRef = useRef();

  return (
    <>
      <Card className={bookRec ? "" : "d-none"}>
        <Card.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' ref={titleRef} required />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Author</Form.Label>
              <Form.Control type='text' ref={authorRef} required />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Review</Form.Label>
              <Form.Control as='textarea' rows={3} ref={descriptionRef} />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Recommend
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        {/* {books.map((doc) => {
          return (
            <Card key={doc.id} id='tbr'>
              <h3>{doc.book.title}</h3>
              <span>{doc.book.author}</span>
              <p>{doc.book.description}</p>
            </Card>
          );
        })} */}
        <h1>Book List</h1>
      </Card>
    </>
  );
};
