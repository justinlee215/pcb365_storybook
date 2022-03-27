import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, ProgressBar } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

export default function Layout({children}) {
  const [progress, setProgress] = useState(0)

  const updateProgressHandler = setInterval(() => {
    if (progress >= 100 ){
     setProgress(100)
     clearInterval(updateProgressHandler)
    }
    setProgress(s => s+1)
   }, 0)

  return (
    <div>
      <ProgressBar now={progress} variant="pcbColorRed" style={{borderRadius: "0"}}/>
        <header>
          <Navbar bg="pcbColorBlue" expand="lg" >
          <Container fluid>
            <Link href="/"><Navbar.Brand href="/"><Image
                priority
                src="/images/logo_white_1.png"
                // className={styles.logo}
                height={56.5}
                width={90}
                // alt={name}
              /></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link href="/personal"><Nav.Link href="/eforms">eForms</Nav.Link></Link>
                <Link href="/forms/dynamic"><Nav.Link href="/shipments">Shipments</Nav.Link></Link>
                <Link href="/forms/dynamicTest"><Nav.Link href="/">Reports</Nav.Link></Link>
                <Link href="/achieve"><Nav.Link href="/">Contactus</Nav.Link></Link>
                <NavDropdown title="Documentation" id="navbarScrollingDropdown">
                <Link href="/forms/canadacustomsinvoice"><NavDropdown.Item href="#action3" className="nav-items" >Canada Customs Invoice</NavDropdown.Item></Link>
                <Link href="/forms/uscustomsinvoice"><NavDropdown.Item href="#action4">US Customs Invoice</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <Link href="/forms"><NavDropdown.Item href="#action5">All Documentation</NavDropdown.Item></Link>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-1"
                  aria-label="Search"
                />
                 <Button style={{ marginRight: "1rem"}}>
                 Search
                </Button>
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
