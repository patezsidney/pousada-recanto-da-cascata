import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>

      </Head>
      <h1>Cascata</h1>
      <a href="#">Meu link diferente</a>
      <Link href="/teste" >
        <button> Página de teste</button>
      </Link>
    </div>
  )
}

export default Home
