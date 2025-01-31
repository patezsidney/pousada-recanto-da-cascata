import { useState } from "react"
import { FaPlayCircle } from "react-icons/fa";
import { Button, Container, Title, PlayerButton } from "../../../styles/components/headerLogoStyles"
import { VideoModal } from "../../videoModal"
import { Icon } from "@mui/material"

export const HeaderLogo = () => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }
  
  return (
      <Container>
        <p id="pousada">Pousada</p>
        <Title>
        <VideoModal videoURL="https://www.youtube.com/watch?v=lG9zqqvyyxI" isOpen={showModal} handleClose={closeModal} />
        <span id="recanto" >Recanto da</span><br/>
          Cascata</Title>
        <div style={{display: "flex", justifyContent: "center"}}>
        <PlayerButton onClick={() => openModal()}>
          <Icon
            fontSize="large"
            aria-label="Assistir ao vídeo de apresentação" 
            >
              <FaPlayCircle/>
          </Icon>
          <p>Conheça a pousada</p>
        </PlayerButton>
        </div>
      </Container>
  )
}
