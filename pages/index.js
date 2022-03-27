import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Layout from '../components/layout/Layout'

import logo from '../public/images/logo_black.png'
import trade1 from '../public/images/trade1.jpg'
import trade2 from '../public/images/trade2.jpg'
import trade3 from '../public/images/trade3.jpg'
import trade4 from '../public/images/trade4.jpg'
import trade5 from '../public/images/trade5.jpg'
import trade6 from '../public/images/trade6.jpg'

import { Button } from 'react-bootstrap';

export default function Home(props) {
  console.log('hello world: ', props)
  return (
    <Layout>
      <Head>
        <title>{}</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main">

        <Button variant="flat" size="xxl" className={styles.flat}>ohoho</Button>
        <div className={styles.box}>test</div>
        {[trade1, trade2, trade3, trade4, trade5, trade6].map((ele, i)=> { 
          return (
          <div className="largeBox" key={i}>
              <Image src={ele} width={500} height={500} priority={true}></Image>
          </div>
        )
          }
          )}
      </main>
    </Layout>
  )
}
