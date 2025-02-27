import Head from "next/head"
import Image from "next/image";
import { Stack } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Banner, Content } from "../styles/pages/acomodacoes"
import imagens from "../assets/images"
import { useState, useEffect } from "react"
import { ImageModal } from "../components/imageModal";

const Acomodacoes = () => {
  const [imagesList, setImagesList] = useState<StaticImageData[]>([])
  const [showModal, setShowModal] = useState(false)
  const [indexOnModalOpen, setIndexOnModalOpen] = useState(0)

  const closeModal = () => {
    setShowModal(false)
    setIndexOnModalOpen(0)
  }

  const openModal = (imageIndex: number) => {
    setIndexOnModalOpen(imageIndex)
    setShowModal(true)
  }

  useEffect(() => {
    setImagesList(imagens.acomodacoes.sort(() => Math.random() - 0.5))
  }, [])

  return (
    <div>
      <Head>
      <title>Pousada Recanto da Cascata - Acomodações</title>
      </Head>
      <Header/>
      <Content>
        <span>Conheça</span>
        <h2>Nossas acomodações</h2>
        <p>
          Bem-vindo à nossa pousada, um refúgio de conforto e tranquilidade no coração 
          da estância hidromineral de Águas de Lindóia. 
        </p>
        <p>
          Pensamos em todos os detalhes 
          para proporcionar a você uma experiência única de descanso e bem-estar. 
        </p>
        <p>
          Aqui, oferecemos diferentes tipos de acomodações, cada uma pensada para 
          atender às suas necessidades e preferências.
        </p>
        <a href="https://api.whatsapp.com/send?phone=5519997647592" target='_blank'>
          <Banner>
            <p>Reserve já!</p>
            <p>Venha viver momentos de pura tranquilidade em nossa pousada!</p>
          </Banner>
        </a>

        <ImageModal imageList={imagesList} isOpen={showModal} openIndex={indexOnModalOpen} handleClose={closeModal} />
        <section>
          <Masonry columns={{xs: 2, sm: 3}} spacing={2}>
            {imagesList.map((imageOnList, index) => (
              <Stack key={index} onClick={() => openModal(index)}>
                  <Image src={imageOnList} objectFit="cover" loading="lazy"/>
              </Stack>
            ))}
          </Masonry>
        </section>
      </Content>
      <Footer/>
    </div>
  )
}

export default Acomodacoes
