import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
// import styles from '../styles/Home.module.scss'

import Layout from '../components/layout/Layout'

import logo from '../public/images/logo_black.png'
import trade1 from '../public/images/trade1.jpg'
import trade2 from '../public/images/trade2.jpg'
import trade3 from '../public/images/trade3.jpg'
// import trade4 from '../public/images/trade4.jpg'
// import trade5 from '../public/images/trade5.jpg'
// import trade6 from '../public/images/trade6.jpg'

import { useSpring, animated } from 'react-spring'
import Card from '../components/card/Card'

import { Carousel, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>PCB365</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>


      <main className="main">
        <Carousel variant="dark">
          
          <Carousel.Item interval={40}>
          <div className="largebox">
                    <Image src={trade1} width={1350} height={800} priority ></Image>
                    {/* <Card /> */}
                </div>
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>slide 1</p>
            </Carousel.Caption>
            
          </Carousel.Item>
          
          <Carousel.Item interval={40}>
          <div className="largebox">
                    <Image src={trade2} width={1350} height={800} priority ></Image>
                    {/* <Card /> */}
                </div>
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>slide 2</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item interval={40}>
          <div className="largebox">
                    <Image src={trade3} width={1350} height={800} priority ></Image>
                    {/* <Card /> */}
                </div>
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>slide 3</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </main>
    </Layout>
  )
}
