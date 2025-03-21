import { useState } from "react"
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { Container, Content, Logo } from "../../styles/components/footerStyles"
import { TextModal } from "../textModal" 

export const Footer = () => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <Container>
      <Content>
        <div>
          <Logo>
            <p id="pousada" >POUSADA</p>
            <p id="recanto">RECANTO DA</p>
            <p id="cascata">Cascata</p>
          </Logo>
          <div id="address">
            <p>End: Rua Caminho da Cascata, n° 200</p>
            <p>Bairro: Parque Daragona</p>
            <p>Águas de Lindóia | SP</p>
            <p>CEP:13940-000</p>
          </div>
        </div>
        <div className="social">
          <h3>Nossas redes sociais:</h3>
          <a href="https://www.instagram.com/pousadarecantodacascata/">
            <button>
              <FaInstagram/>
              <p>Instagram</p>
            </button>
          </a>
          <a href="https://www.tiktok.com/@pousada_da_cascata">
            <button>
              <FaTiktok/>
              <p>TikTok</p>
            </button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5519997647592">
            <button>
              <FaWhatsapp/>
              <p>WhatsApp</p>
            </button>
          </a>
          <h3>Políticas e normas:</h3>
          <a onClick={() => openModal()}>
              <button>
              <p>Políticas de cancelamento</p>
            </button>
          </a>
        </div>
        <TextModal 
          isOpen={showModal} 
          title="Política de cancelamento:" 
          content="Você pode efetuar o cancelamento gratuitamente até 14 dias antes da chegada. Haverá a cobrança de 50% de preço total em caso de cancelamento nos 14 dias anteriores à chegada. Em caso de não comparecimento, haverá a cobrança do preço total da reserva." 
          handleClose={closeModal} 
        ></TextModal>
        <div>
          <h3>Onde estamos:</h3>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d921.7902325920968!2d-46.62220481349272!3d-22.460585986430587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c91116328b665b%3A0xab1b7fbf9ad9db57!2sPousada%20Recanto%20da%20Cascata!5e0!3m2!1spt-BR!2sbr!4v1640963451214!5m2!1spt-BR!2sbr"
          width="350"
          height="250"
          loading="lazy"
          ></iframe>
        </div>
      </Content>
      <div id="direitos">
        <p>© 2021 Pousada Recanto da Cascata. Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}
