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

import { Button } from 'react-bootstrap'


function Example() {
  const example = useSpring({ reset: true, delay: 200, to: { opacity: 0 }, from: { opacity: 1 } })
  return <animated.div style={example}>I will fade in</animated.div>
}

function SVG() {
  const [flip, set] = useState(false)
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0 },
    x: 1,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!flip),
  })

  return (
    <animated.svg
      style={{ margin: 20, width: 80, height: 80 }}
      viewBox="0 0 45 44"
      strokeWidth="2"
      fill="white"
      stroke="rgb(45, 55, 71)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={156}
      strokeDashoffset={x.to(x => (1 - x) * 156)}>
      <polygon points={6} />
    </animated.svg>
  )
}

function Number() {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 100,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.div>{number.to(n => n.toFixed(3))}</animated.div>
}

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>PCB365</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main">
        <Example />
        <Number />
        <SVG />
        <div className="largebox">
            <Image src={trade2} width={1050} height={650} priority ></Image>
            <Card />
        </div>
      </main>
    </Layout>
  )
}
