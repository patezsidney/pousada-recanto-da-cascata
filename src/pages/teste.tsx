import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Pagina de teste atualizada</h1>
      <Link href='/'>
      <a>Voltar</a>
      </Link>
    </div>
  )
}

export default Home
