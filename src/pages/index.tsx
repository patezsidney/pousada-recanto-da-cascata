import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/header'
import { Banner, Container, Content, ReverseCard, SingleCard } from '../styles/pages/home '
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import imagens from '../assets/images'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Pousada Recanto da Cascata - Inicio</title>
      </Head>
      <Header/>
      <Content>
        <a href="https://api.whatsapp.com/send?phone=5519997647592" target='_blank'>
        <Banner>
            <p>Fale conosco e faça sue reserva:</p>
            {/* <FaWhatsapp/> */}
            <p>WhatsApp: (19) 99764-7592</p>
        </Banner>
        </a>
        <SingleCard>
          <div className='cardContent'>
            <div>
              <h2>Paraíso no Interior</h2>
              <p>Viva a incrível experiência de se sentir em casa em meio a natureza. Aproveite a paz, o aconchego e apenas relaxe. Esse paraíso está te esperando a apenas 180 km de São Paulo.</p>
              <button>Saiba mais</button>
            </div>
          </div>
          <div className='cardImage' id='hidroInterna'>
            {/* <Image src={imagens.hidroInterna[1]} objectFit='cover' /> */}
          </div>
        </SingleCard>
        <ReverseCard>
          <div className='cardContent'>
            <div>
              <h2>Acomodações</h2>
              <p>Todo o conforto e a praticidade que você espera: móveis e roupas de cama de alta qualidade, hidromassagem e lareira. Suítes equipadas e espaçosas para a família ou mais intimista e romântica para datas especiais.</p>
              <button>Saiba mais</button>
            </div>
          </div>
          <div className='cardImage' id='hidroExterna'>
            {/* <Image src={imagens.hidroExterna[1]} objectFit='cover' /> */}
          </div>
        </ReverseCard>
        <SingleCard>
          <div className='cardContent'>
            <div>
              <h2>Estrutura Completa</h2>
              <p>Combinação perfeita da hospedagem de luxo com a vida em meio a natureza. Belíssima área externa com piscina, queda d'água, espaço gourmet e hidromassagem.</p>
              <button>Saiba mais</button>
            </div>
          </div>
          <div className='cardImage' id='geral'>
            {/* <Image src={imagens.geral[0]} objectFit='cover'  /> */}
          </div>
        </SingleCard>
        <ReverseCard>
          <div className='cardContent'>
            <div>
              <h2>Capital Thermal do Brasil</h2>
              <p>A Estância Hidromineral de Águas de Lindoia está localizada entre montanhas e vales da Serra da Mantiqueira. Faz parte do Circuito das Águas Paulista e é mundialmente famosa por suas águas radioativas.</p>
              <button>Saiba mais</button>
            </div>
          </div>
          <div className='cardImage' id='cidade'>
            {/* <Image src={imagens.cidade[0]} objectFit='cover'/> */}
          </div>
        </ReverseCard>
      </Content>

    </Container>
  )
}

export default Home
