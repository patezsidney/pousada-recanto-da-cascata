import Head from "next/head"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Content } from "../styles/pages/acomodacoes"

const Acomodacoes = () => {
  return (
    <div>
      <Head>
      <title>Pousada Recanto da Cascata - Acomodações</title>
      </Head>
      <Header/>
      <Content>
        <span>Conheça</span>
        <h2>Nossas acomodações</h2>

        <section>
          <div className="carrosselTitle">
            <h3>Suite com Hidromassagem interna</h3>
          </div>
          <div className="carrossel">
          </div>
        </section>
        <section>
          <div className="carrosselTitle">
            <h3>Suite com Hidromassagem externa</h3>
          </div>
          <div className="carrossel">
          </div>
        </section>
        <section>
          <div className="carrosselTitle">
            <h3>Suite Luxo</h3>
          </div>
          <div className="carrossel">
          </div>
        </section>
        <section>
          <div className="carrosselTitle">
            <h3>Quarto triplo com varanda</h3>
          </div>
          <div className="carrossel">
          </div>
        </section>
      </Content>
      <Footer/>
    </div>
  )
}

export default Acomodacoes
