import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.scss'

import Layout from '../components/layout/Layout'

import logo from '../public/images/logo_black.png'
import trade1 from '../public/images/trade1.jpg'
import trade2 from '../public/images/trade2.jpg'
import trade3 from '../public/images/trade3.jpg'
// import trade4 from '../public/images/trade4.jpg'
// import trade5 from '../public/images/trade5.jpg'
// import trade6 from '../public/images/trade6.jpg'

import Card from '../components/card/Card'

import { Button } from 'react-bootstrap'

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>PCB365</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main">
        <div className="largebox">
            <Image src={trade2} width={1050} height={650} priority ></Image>
            <Card />
        </div>
      </main>
    </Layout>
  )
}
