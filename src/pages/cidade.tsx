import Head from "next/head"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Container, Content } from "../styles/pages/cidade"


const Cidade = () => {
  return (
    <Container>
      <Head>
        <title>Pousada Recanto da Cascata - Cidade</title>
      </Head>
      <Header/>

      <Content>
        <section>
          <span>Venha conhecer</span>
          <h2>Águas de Lindóia</h2>
          <p>Conheça a Estância Hidromineral de Águas de Lindóia, conhecida como a Capital Termal do Brasil. Localizada a 180 km de São Paulo, faz parte do Circuito das Águas e está a apenas 8 km da divisa com Minas Gerais.</p>
          <p>Uma cidade pequena e calma, ideal tanto para famílias que procuram um lugar para se divertir e relaxar com o clima do interior, como para aqueles que têm um espírito mais aventureiro.</p>
          <p>Dentre as atrações e pontos turísticos estão as famosas águas radioativas que foram para a lua, belezas naturais e também o ecoturismo.</p>
        </section>
        <section>
          <div id="carrossel"></div>
        </section>
      </Content>

      <Footer/>
    </Container>
  )
}

export default Cidade
