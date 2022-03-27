import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, ProgressBar } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/whitelogo.png'
import { useState } from 'react'
import { Person } from 'react-bootstrap-icons';

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
      <ProgressBar sticky="top" now={progress} variant="pcbColorRed" style={{borderRadius: "0", backgroundColor: "white"}}/>
        <header>
          <Navbar sticky="top" bg="pcbColorBlue" expand="lg" variant="dark">
          <Container fluid>
            <Link href="/"><Navbar.Brand href="/" className="logo" >
              <Image
                priority
                src={logo}
               
                width={90}
                height={56.5}
                alt="image"
                className="logo_image"
              /></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggle"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav
              justify
              // className="justify-content-start" 
                // className="me-auto my-10 my-lg-0"
                navbarScroll
                style={{marginLeft: "80px", width: "60%"}}
              >
                <Link href="/eforms"><Nav.Link href="/eforms"> eForms</Nav.Link></Link>
                <Link href="/forms/dynamic"><Nav.Link href="/shipments">Shipments</Nav.Link></Link>
                <Link href="/forms/dynamicTest"><Nav.Link href="/">Reports</Nav.Link></Link>
              </Nav>
              <Nav justify style={{width: "25%"}}>
                <NavDropdown title="Documentation" id="navbarScrollingDropdown">
                <Link href="/forms/canadacustomsinvoice"><NavDropdown.Item href="#action3" className="nav-items" >Canada Customs Invoice</NavDropdown.Item></Link>
                <Link href="/forms/uscustomsinvoice"><NavDropdown.Item href="#action4">US Customs Invoice</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <Link href="/forms"><NavDropdown.Item href="#action5">All Documentation</NavDropdown.Item></Link>
                </NavDropdown>

                <Link href="/achieve"><Nav.Link href="/">Contact Us</Nav.Link></Link>
              </Nav>
                <Nav fill style={{ width: "10%", marginLeft: "30px", marginRight: "10px"}}><Link href="/"><Nav.Link>Log In <Person style={{ marginLeft: "10px"}}size={23}/> </Nav.Link></Link></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>
        <main>{children}</main>

        <footer>footer</footer>
    </div>
  )
}
