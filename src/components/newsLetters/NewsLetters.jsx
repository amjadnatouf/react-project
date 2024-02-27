import { Container, Form, Button } from "react-bootstrap";

const NewsLetters = () => {
  return (
    <div className="news-letter" id="news">
      <Container className="news-letter-container">
        <div
          className="newsletter d-lg-flex d-md-block justify-content-between align-items-center"
          data-radius="50"
        >
          <p className="newsletter-text">
            Register to our newsletter and don’t miss anything anymore. We
            promise we will not spam you!
          </p>

          <Form className="newsletter-form">
            <Form.Group id="email">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Button type="submit" className="button">
              Subscribe
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetters;
