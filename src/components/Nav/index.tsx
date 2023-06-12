import { FC, RefObject } from 'react'
import { Link } from 'react-scroll'
import { 
  Container,
  Nav,
  Navbar,
  Form } 
  from '@/components'

const Navigation: FC = () => {

  const scrollLink = (link: string, to: string) => <Link to={to} spy={true} smooth={true} offset={50} duration={500}>{link}</Link>
    return(
        <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand>{scrollLink("holmberg.dev", "home")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Projects</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation