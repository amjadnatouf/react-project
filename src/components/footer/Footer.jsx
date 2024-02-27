import { Navbar, Nav } from "react-bootstrap";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Navbar className="footer py-5" variant="dark">
      <Container>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>

        <Nav className="flex-column-reverse justify-content-end align-items-end flex-grow-1 pe-3">
          <div className="d-flex justify-content-end align-items-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </div>
          <div className="d-flex justify-content-end align-items-end">
            <Nav.Link href="#action4">
              <Nav.Item className="icon">
                <IconBrandTwitter />
              </Nav.Item>
            </Nav.Link>
            <Nav.Link href="#action5">
              <Nav.Item className="icon">
                <IconBrandYoutube />
              </Nav.Item>
            </Nav.Link>
            <Nav.Link href="#action6">
              <Nav.Item className="icon">
                <IconBrandInstagram />
              </Nav.Item>
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
