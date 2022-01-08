import Head from "next/head"
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Content } from "../styles/pages/contato"

const Contato = () => {
  return (
    <div>
      <Head>
      <title>Pousada Recanto da Cascata - Entrar em contato</title>
      </Head>
      <Header/>
      <Content>
            <h2>Entre em contato!</h2>
        <section id='links'>

          <div>
            <FaPhoneAlt/>
            <a href="tel:19997647592">(19) 99764-7592</a>
          </div>
          <div>
            <FaWhatsapp/>
            <a href="https://api.whatsapp.com/send?phone=5519997647592">(19) 99764-7592</a>
          </div>
          <div>
            <FaEnvelope/>
            <a href="mailto:pousadarecantodacascata@hotmail.com">pousadarecantodacascata@hotmail.com</a>
          </div>

        </section>
        <div>

          <section id="map">
            <h3>Estamos te esperando!</h3>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d921.7902325920968!2d-46.62220481349272!3d-22.460585986430587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c91116328b665b%3A0xab1b7fbf9ad9db57!2sPousada%20Recanto%20da%20Cascata!5e0!3m2!1spt-BR!2sbr!4v1640963451214!5m2!1spt-BR!2sbr"
            loading="lazy"
            ></iframe>
          </section>
          <section id="form">

          </section>
        </div>
      </Content>
      <Footer/>
    </div>
  )
}

export default Contato
