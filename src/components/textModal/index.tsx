import Modal from "@mui/material/Modal"
import { FaTimes } from "react-icons/fa"
import { ModalContainer, ModalContent } from "../../styles/components/textModalStyles"

interface TextModalProps {
  title: string,
  content: string,
  isOpen: boolean,
  handleClose: () => void,
}

export const TextModal = ({title, content, isOpen, handleClose}: TextModalProps) => {

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center'}}
    >
      <ModalContainer>
        <FaTimes id="closeModal" onClick={handleClose} />
        <ModalContent>
          <h2>{title}</h2>
          <p>{content}</p>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}
