import { Row, Col, Image } from "react-bootstrap";
import { data } from "./data";
import Container from "react-bootstrap/Container";

export const SectionOne = () => {
  return (
    <Container>
      <Row className="py-5 porject">
        {data.map((item, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <div className="position-relative project-card  mb-5">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow project-img "
                alt="Boat on Calm Water"
              />
              <div className="overlay">
                <p className="overlay-text">{item.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
