import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import imagens from '../assets/images'



const Home: NextPage = () => {
  const {query, route} = useRouter()
  console.log('query:', query, 'route:', route)
  return (
    <div>
      {imagens.geral.map(image => <Image alt='' src={image} height={100} width={100}/>)}
      <Link href='/'>
      <a>Voltar</a>
      </Link>
    </div>
  )
}

export default Home
