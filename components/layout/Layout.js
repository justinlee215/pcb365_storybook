import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  ProgressBar,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/whitelogo.png";
import { useState } from "react";
import { Person } from "react-bootstrap-icons";

import CustomDropdown from "../dropdown/CustomDropdown";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };

  const [progress, setProgress] = useState(0);

  const updateProgressHandler = setInterval(() => {
    if (progress >= 100) {
      setProgress(100);
      clearInterval(updateProgressHandler);
    }
    setProgress((s) => s + 1);
  }, 50);

  return (
    <>
      <Navbar sticky="top" className="navbar" expand="lg" variant="dark">
        <Container fluid>
          <Link href="/">
            <Navbar.Brand href="/" className="logo">
              <Image
                priority
                src={logo}
                width={90}
                height={56.5}
                alt="image"
                className="logo_image"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="navbarScroll" className="navbar-collapse">
            <Nav className="nav-section1" navbarScroll>
              <CustomDropdown
                itemName="eForms"
                className="navdropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              ></CustomDropdown>
              <Link href="/shipments">
                <Nav.Link href="/shipments">Shipments</Nav.Link>
              </Link>
              <Link href="/reports">
                <Nav.Link href="/">Reports</Nav.Link>
              </Link>
            </Nav>
            <Nav className="nav-section2">
              <NavDropdown
                title="Documentation"
                id="navbarScrollingDropdown"
                className="navdropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Link href="/forms/canadacustomsinvoice">
                  <NavDropdown.Item href="#action3" className="nav-items">
                    Canada Customs Invoice
                  </NavDropdown.Item>
                </Link>
                <Link href="/forms/uscustomsinvoice">
                  <NavDropdown.Item href="#action4" className="nav-items">
                    US Customs Invoice
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/forms">
                  <NavDropdown.Item href="#action5" className="nav-items">
                    All Documentation
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/contactus">
                <Nav.Link
                  href="/"
                  style={{ minWidth: "100px" }}
                  className="contactus"
                >
                  Contact Us
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className="nav-section3">
              <Link href="/logIn">
                <Nav.Link href="/">
                  Log In <Person className="iconPerson" size={20} />{" "}
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProgressBar
        now={progress}
        variant="progressBar"
        style={{
          borderRadius: "0",
          height: "1rem",
          backgroundColor: "white",
          left: "0",
          top: "200",
        }}
      />
      {children}
      <Footer />
    </>
  );
}
