import { FC } from 'react'
import { 
  Container,
  Nav,
  Navbar,
  Form } 
  from '@/components'
import './Nav.scss'

const Navigation: FC = () => {

    return(
        <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">holmberg.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
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