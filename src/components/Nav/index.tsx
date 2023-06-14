import { FC, useContext, useMemo, ChangeEvent} from 'react'
import { 
  Container,
  Nav,
  Navbar,
  Form } 
from '@/components'
import DataContext from '@/context/DataContext'


const Navigation: FC = () => {

  const handleChange = (e: ChangeEvent<FormControlElement>): void => {
    const element = document.getElementById(`${e.target?.value}`)
    window.scrollTo({
      top: element?.offsetTop,
      behavior: "smooth"
    })
  }

  const data: PortfolioData = useContext(DataContext)
  const nav_data: JSONObject = useMemo(() => data?.portfolio_data.nav,[data])

  return(
    <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">{nav_data?.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#banner">{nav_data?.home}</Nav.Link>
          <Nav.Link href="#about">{nav_data?.about}</Nav.Link>
          <Nav.Link href="#projects">{nav_data?.projects}</Nav.Link>
          <Nav.Link href="#contact">{nav_data?.contact}</Nav.Link>
        </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation