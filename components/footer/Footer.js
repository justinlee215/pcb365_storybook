import React from "react"
import Image from "next/image"
import logo from '../../public/images/logo_color.png'
import favicon from '../../public/favicon.png'

export default function Footer() {
  return (
    <>
      <div className="container" id="footer">
        <footer className="pt-1 my-md-5 pt-md-5 border-top ps-4">
          <div className="row">
            <div className="col-12 col-md">
              <a className="navbar-brand" href="/">
                {" "}
                <Image
                  src={logo}
                  alt="PCB Logo"
                  width={250}
                  height={78}
                />
              </a>
              <small className="d-block mb-3 text-muted ps-2">&copy; 2022</small>
            </div>
            <div className="col-6 col-md ps-4">
              <h5 className="mb-2">Features</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">Log in </li>
                <li className="mb-1">Sign up </li>
                <li className="mb-1 text-muted">eForms</li>
                <li className="mb-1 text-muted">Shipment</li>
                <li className="mb-1">Reports </li>
                <li className="mb-1">Documentation </li>
                <li className="mb-1">Your eForms List</li>
                <li className="mb-1">Your Documentation</li>
                <li className="mb-1">Your Cart</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="mb-2">Resources</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-2">
                  Photos from{" "}
                  <a
                    className="text-muted"
                    href="https://www.unsplash.com/"
                    target="_blank"
                  >
                    Unsplash
                  </a>
                </li>
                <li className="mb-2">Photo Artists</li>
                <li className="mb-2">
                  People vector Created by{" "}
                  <a
                    className="text-muted"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Freepik
                  </a>
                </li>
                <li className="mb-2">
                  {" "}
                  <a
                    className="text-muted"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Work
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md ps-4">
              <h5 className="mb-2">About Us</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <div className="text-muted mt-2 mb-4 d-flex">
                    <a
                      href=""
                      target="_blank"
                    >
                      <span className="mr-1">© PCB365 </span>
                    </a>
                  </div>
                </li>
                <li className="mb-4">
                  <a target="_blank" href="">
                    <span className="mr-2">PCB</span>
                    <i className="g"></i>
                  </a>
                </li>
                <li className="mt-2 mb-4">
                  <a
                    target="_blank"
                    href=""
                  >
                    <span className="mr-2">PCBUSA</span>
                    <i className=""></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
