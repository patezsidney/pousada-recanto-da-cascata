import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pousada Recanto da Cascata - Inicio</title>
      </Head>
      <Header/>
    </div>
  )
}

export default Home
