import { FC, ChangeEvent} from 'react'
import { 
  Container,
  Nav,
  Navbar,
  Form } 
from '@/components'


const Navigation: FC = () => {

  const handleChange = (e: ChangeEvent<FormControlElement>): void => {
    const element = document.getElementById(`${e.target?.value}`)
    window.scrollTo({
      top: element?.offsetTop,
      behavior: "smooth"
    })
  }

  return(
      <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Holmberg.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#banner">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleChange(e)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation