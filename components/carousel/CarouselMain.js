import React from 'react'

import { Carousel, Button } from 'react-bootstrap'
import trade1 from '../../public/images/trade1.jpg'
import trade2 from '../../public/images/trade2.jpg'
import trade3 from '../../public/images/trade3.jpg'
// import trade4 from '../../public/images/trade4.jpg'
// import trade5 from '../../public/images/trade5.jpg'
// import trade6 from '../../public/images/trade6.jpg'

import Image from 'next/image'

export default function CarouselMain() {
  return (
      <Carousel variant="dark" className="carousel">
          <Carousel.Item interval={40} style={{ position: "absolute", left: "1000", top: "1000"}}>
              <div className="largebox">
                  <Image src={trade1} width={1350} height={800} priority className="mainImage"></Image>
                  {/* <Card /> */}
              </div>
              <Carousel.Caption className="textBox">
                  <h5>First slide label</h5>
                  <p>slide 1</p>
              </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item interval={40} style={{ position: "absolute"}}>
              <div className="largebox">
                  <Image src={trade2} width={1350} height={800} priority className="mainImage"></Image>
                  {/* <Card /> */}
              </div>
              <Carousel.Caption className="textBox">
                  <h5>Second slide label</h5>
                  <p>slide 2</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={40} style={{ position: "absolute"}}>
              <div className="largebox">
                  <Image src={trade3} width={1350} height={800} priority className="mainImage"></Image>
                  {/* <Card /> */}
              </div>
              <Carousel.Caption className="textBox">
                  <h5>Third slide label</h5>
                  <p>slide 3</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  )
}
