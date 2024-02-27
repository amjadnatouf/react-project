import { PropTypes } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <Container className="text-center mb-1 text-light">
      <Row>
        <Col>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

// Define PropTypes
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionHeader;
