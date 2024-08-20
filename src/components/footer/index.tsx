import { useEffect, useState, useRef } from "react"
import { FaInstagram } from "react-icons/fa"
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
        </div>
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
        <p>© 2021 Pousada Recanto da Cascata. Todos os direitos reservados. <a onClick={() => openModal()}>Políticas</a></p>
        <TextModal 
          isOpen={showModal} 
          title="Política de cancelamento:" 
          content="Você pode efetuar o cancelamento gratuitamente até 14 dias antes da chegada. Haverá a cobrança de 50% de preço total em caso de cancelamento nos 14 dias anteriores à chegada. Em caso de não comparecimento, haverá a cobrança do preço total da reserva." 
          handleClose={closeModal} 
        ></TextModal>
      </div>
    </Container>
  )
}
