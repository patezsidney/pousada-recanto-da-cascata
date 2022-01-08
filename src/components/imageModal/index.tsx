import Modal from "@mui/material/Modal"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa"
import { ModalContainer, ModalContent } from "../../styles/components/imageModalStyles"

interface ImageModalProps {
  imageList: StaticImageData[],
  openIndex: number,
  isOpen: boolean,
  handleClose: () => void,
}

export const ImageModal = ({imageList, openIndex, isOpen, handleClose}: ImageModalProps) => {
  const [showImage, setShowImage] = useState(openIndex)

  const handleImage = (next: string) => {
    const listLength = imageList.length - 1
    if (next === 'next') {
      showImage === listLength ? setShowImage(0) : setShowImage(showImage + 1)
    }
    if (next === 'previous') {
      showImage === 0 ? setShowImage(listLength) : setShowImage(showImage + 1)
    }
  }

  useEffect(() => {
    setShowImage(openIndex)
  },[openIndex])

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center'}}
    >
      <ModalContainer>
        <FaTimes id="closeModal" onClick={handleClose} />
        <div id='nextImageButton' onClick={() => handleImage('next')}>
          <FaAngleRight />
        </div>
        <div id='previousImageButton' onClick={() => handleImage('previous')} >
          <FaAngleLeft />
        </div>
        <ModalContent>
          <Image src={imageList[showImage]} height={600} objectFit="contain" layout="fill" loading="lazy"/>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}
