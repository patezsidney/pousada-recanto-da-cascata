import Head from "next/head"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Button, Content } from "../styles/pages/a-pousada"
import Masonry from '@mui/lab/Masonry';
import imagens from "../assets/images";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import { ImageModal } from "../components/imageModal";

const APousada = () => {

  const [generalImagesList, setGeneralImagesList] = useState<StaticImageData[]>([])
  const [imagesList, setImagesList] = useState<StaticImageData[]>([])
  const [showButton, setShowButton] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [indexOnModalOpen, setIndexOnModalOpen] = useState(0)

  const showAllImages = () => {
    let list = [
      ...generalImagesList,
      ...imagens.hidroExterna,
      ...imagens.hidroInterna,
      ...imagens.suiteLuxo,
      ...imagens.triploVaranda
    ]
    setImagesList(list)
    setShowButton(false)
  }

  const closeModal = () => {
    setShowModal(false)
    setIndexOnModalOpen(0)
  }

  const openModal = (imageIndex: number) => {
    setIndexOnModalOpen(imageIndex)
    setShowModal(true)
  }

  useEffect(() => {
    setGeneralImagesList(imagens.geral.sort(() => Math.random() - 0.5))
    setImagesList(generalImagesList.slice(0, 30))
  }, [])

  useEffect(() => {
    setImagesList(generalImagesList.slice(0, 30))
  }, [generalImagesList])
  

  return (
    <div>
      <Head>
      <title>Pousada Recanto da Cascata - A Pousada</title>
      </Head>
      <ImageModal imageList={imagesList} isOpen={showModal} openIndex={indexOnModalOpen} handleClose={closeModal} />
      <Header/>
      <Content>
        <section>
          <span>Venha conhecer</span>
          <h2>Pousada Recanto da Cascata</h2>
          <p>A Pousada Recanto da Cascata é a escolha certa para quem busca relaxar e desacelerar, um refúgio no interior de São Paulo, feito para aproveitar a natureza e o melhor da vida. Desfrute das nossas comodidades e estrutura completa, oferecemos o melhor da hospedagem de luxo com o essencial que você merece: afeto, conexão, humanização e amor. Fale com a gente e se permita viver essa experiência única e memorável!</p>
        </section>
        <section>
          <Masonry columns={{xs: 2, sm: 3}} spacing={2}>
            {imagesList.map((imageOnList, index) => (
              <Stack key={index} onClick={() => openModal(index)}>
                  <Image src={imageOnList} objectFit="cover" loading="lazy"/>
              </Stack>
            ))}
          </Masonry>
          {showButton && <Button onClick={showAllImages} >Ver todas as imagens</Button>}
        </section>
      </Content>
      <Footer/>
    </div>
  )
}

export default APousada
