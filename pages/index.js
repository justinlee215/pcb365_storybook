import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout/Layout'

import logo from '../public/images/logo_black.png'
import trade1 from '../public/images/trade1.jpg'
import trade2 from '../public/images/trade2.jpg'
import trade3 from '../public/images/trade3.jpg'
import trade4 from '../public/images/trade4.jpg'
import trade5 from '../public/images/trade5.jpg'
import trade6 from '../public/images/trade6.jpg'

import { Nav } from 'react-bootstrap'

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
        Hello World!
        {/* <Image src={logo} ></Image> */}
        {[trade1, trade2, trade3, trade4, trade5, trade6].map((ele, i)=> {
          // console.log(ele)  
          return (
          <div className="largeBox" key={i}>
              <Image src={ele} width={500} height={500}></Image>
          </div>
        )
          }
          )}
      </main>
    </Layout>
  )
}
