import Head from "next/head"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Button, Content } from "../styles/pages/a-pousada"
import Masonry from '@mui/lab/Masonry';
import imagens from "../assets/images";
import { useState } from "react";
import Image from "next/image";
import { Stack } from "@mui/material";

const APousada = () => {

  const [imagesList, setImagesList] = useState(imagens.geral)
  const [showButton, setShowButton] = useState(true)

  const showAllImages = () => {
    let list = [
      ...imagens.geral,
      ...imagens.hidroExterna,
      ...imagens.hidroInterna,
      ...imagens.suiteLuxo,
      ...imagens.triploVaranda
    ]
    setImagesList(list)
    setShowButton(false)
  }

  return (
    <div>
      <Head>
      <title>Pousada Recanto da Cascata - A Pousada</title>
      </Head>
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
              <Stack key={index}>
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
