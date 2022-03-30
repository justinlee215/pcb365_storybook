import React from "react"
import Image from "next/image"
import logo from '../../public/images/logo_white_1.png'

export default function Footer() {
  return (
    <>
      <div class="container" id="footer">
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
          <div class="row">
            <div class="col-12 col-md">
              <a class="navbar-brand" href="/">
                {" "}
                <Image
                  src="/PCB-logo-1800px-p-500.png"
                  alt="PCB Logo"
                  width={250}
                  height={78}
                />
              </a>
              <small class="d-block mb-3 text-muted">&copy; 2022</small>
            </div>
            <div class="col-6 col-md">
              <h5 class="mb-2">Features</h5>
              <ul class="list-unstyled text-small">
                <li class="mb-1">Log in </li>
                <li class="mb-1">Sign up </li>
                <li class="mb-1 text-muted">eForms</li>
                <li class="mb-1 text-muted">Shipment</li>
                <li class="mb-1">Reports </li>
                <li class="mb-1">Documentation </li>
                <li class="mb-1">Your eForms List</li>
                <li class="mb-1">Your Documentation</li>
                <li class="mb-1">Your Cart</li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5 class="mb-2">Resources</h5>
              <ul class="list-unstyled text-small">
                <li class="mb-2">
                  Photos from{" "}
                  <a
                    class="text-muted"
                    href="https://www.unsplash.com/"
                    target="_blank"
                  >
                    Unsplash
                  </a>
                </li>
                <li class="mb-2">Photo Artists</li>
                <li class="mb-2">
                  People vector Created by{" "}
                  <a
                    class="text-muted"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Freepik
                  </a>
                </li>
                <li class="mb-2">
                  {" "}
                  <a
                    class="text-muted"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Work
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5 class="mb-2">About Us</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <div class="text-muted mt-2 mb-4 d-flex">
                    <a
                      href=""
                      target="_blank"
                    >
                      <span class="mr-1">© PCB365 </span>
                      <Image
                        src="/PCB-logo-1800px-p-500.png"
                        alt="PCB Logo"
                        width={250}
                        height={78}
                      />{" "}
                    </a>
                  </div>
                </li>
                <li class="mb-4">
                  <a target="_blank" href="">
                    <span class="mr-2">PCB</span>
                    <i class="fab fa-github fa-lg"></i>
                  </a>
                </li>
                <li class="mt-2 mb-4">
                  <a
                    target="_blank"
                    href=""
                  >
                    <span class="mr-2">PCBUSA</span>
                    <i class="fab fa-linkedin fa-lg"></i>
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
