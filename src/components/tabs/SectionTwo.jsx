import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import msg from "../../assets/hero.gif";
import Button from "react-bootstrap/Button";

export const GetInTouch = () => {
  return (
    <div className="contact py-5">
      <Container className="container" fluid>
        <Row className="justify-content-center align-items-center g-4 py-5">
          <Col md={6}>
            <Image src={msg} fluid />
          </Col>
          <Col md={6}>
            <h2 className="text-center text-md-start mb-5 text-light">
              Get in touch
            </h2>
            <Form className="contact-form">
              <Row className="mb-3">
                <Form.Group as={Col} id="name">
                  <Form.Label id="floatingInput" className="mb-3">
                    <Form.Control type="text" placeholder="Joe" />
                  </Form.Label>
                </Form.Group>

                <Form.Group as={Col} id="lastname">
                  <Form.Label id="floatingInput" className="mb-3">
                    <Form.Control type="text" placeholder="Doe" />
                  </Form.Label>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} id="gmail">
                  <Form.Label id="floatingInput" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Label>
                </Form.Group>

                <Form.Group as={Col} id="password">
                  <Form.Label id="floatingInput" className="mb-3">
                    <Form.Control type="password" placeholder="password" />
                  </Form.Label>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Label id="floatingTextarea2">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "150px" }}
                  />
                </Form.Label>
              </Row>

              <Button variant="outline-light" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
