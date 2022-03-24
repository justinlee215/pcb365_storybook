import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'


export default function Layout({children}) {
  return (
    <div>
        <header>
                  <Navbar bg="light" expand="lg" >
          <Container fluid>
            {/* <Link href="/"><Navbar.Brand href="/"><Image
                priority
                src="/images/pcb365.png"
                // className={styles.logo}
                height={66.5}
                width={193}
                // alt={name}
              /></Navbar.Brand></Link> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link href="/personal"><Nav.Link href="/personal">Personal</Nav.Link></Link>
                <Link href="/forms/dynamic"><Nav.Link href="/">Small Business</Nav.Link></Link>
                <Link href="/forms/dynamicTest"><Nav.Link href="/">Commercial</Nav.Link></Link>
                <Link href="/achieve"><Nav.Link href="/">My Achieve</Nav.Link></Link>
                <NavDropdown title="Documentation" id="navbarScrollingDropdown">
                <Link href="/forms/canadacustomsinvoice"><NavDropdown.Item href="#action3">Canada Customs Invoice</NavDropdown.Item></Link>
                <Link href="/forms/uscustomsinvoice"><NavDropdown.Item href="#action4">US Customs Invoice</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <Link href="/forms"><NavDropdown.Item href="#action5">All Documentation</NavDropdown.Item></Link>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
            <Link href="/"><Nav.Link>Sign In</Nav.Link></Link>
          </Container>
        </Navbar>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
    </div>
  )
}
