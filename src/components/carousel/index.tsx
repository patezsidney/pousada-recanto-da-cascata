import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { Container } from "../../styles/components/carousel"
import { ImageModal } from "../imageModal"

interface CarouselProps {
  imageList: StaticImageData[]
}

export const CarouselComponent = ({imageList}: CarouselProps) => {
  const [showModal, setShowModal] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const indexRef = useRef(imageIndex)
  indexRef.current = imageIndex

  const handleImage = () => {
    const listLength = imageList.length - 1
    const index = indexRef.current + 1
    console.log("index",index)
    index > listLength ? setImageIndex(0) : setImageIndex(index)
    // setImageIndex(index)
    console.log(listLength)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = (imageIndex: number) => {
    setShowModal(true)
  }

  useEffect(() => {
    setTimeout(handleImage, 10000)
  },[imageIndex])



  return (
    <Container>
      <ImageModal imageList={imageList} isOpen={showModal} handleClose={closeModal} openIndex={0} />
        {imageList.map((image, index) => (
          <div  key={index} className={index === imageIndex ? 'show' : 'hidden'} onClick={() => openModal(index)}>
            <Image src={image} objectFit="cover" layout="fill" loading="lazy" />
          </div>
        ))}
    </Container>
  )
}
